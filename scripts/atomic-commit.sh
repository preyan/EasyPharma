#!/bin/bash
# Usage: ./scripts/atomic-commit.sh "feat(api): add inventory controller" "[OptionalIssueNumber]"
MESSAGE=$1
MANUAL_ISSUE_NUM=$2

if [ -z "$MESSAGE" ]; then
  echo "❌ ERROR: Commit message is required."
  echo "Usage: ./scripts/atomic-commit.sh \"feat(scope): description\" \"[OptionalIssueNumber]\""
  exit 1
fi

# 1. Parse commit message to find prefix and scope
# e.g., "feat(api): build" -> PREFIX="feat", SCOPE="api"
PREFIX=$(echo "$MESSAGE" | sed -E 's/^([a-z]+)\(.*\):.*$/\1/')
SCOPE=$(echo "$MESSAGE" | sed -E 's/^[a-z]+\((.+)\):.*$/\1/')
TITLE_TEXT=$(echo "$MESSAGE" | sed -E 's/^[a-z]+(\(.+\))?: (.*)$/\2/')

# Fallback if no scope
if [[ "$PREFIX" == "$MESSAGE" ]]; then
  PREFIX=$(echo "$MESSAGE" | sed -E 's/^([a-z]+):.*$/\1/')
  SCOPE=""
fi

# If parsing completely failed (no colon)
if [[ "$PREFIX" == "$MESSAGE" ]]; then
  PREFIX="chore"
  SCOPE=""
  TITLE_TEXT="$MESSAGE"
fi

# 2. Map prefix to template and labels
TEMPLATE=""
LABELS=""
if [[ "$PREFIX" == "feat" ]]; then
  TEMPLATE=".github/ISSUE_TEMPLATE/feature.md"
  LABELS="feature,enhancement"
elif [[ "$PREFIX" == "fix" || "$PREFIX" == "bug" ]]; then
  TEMPLATE=".github/ISSUE_TEMPLATE/bug_report.md"
  LABELS="bug"
fi

if [ -n "$SCOPE" ]; then
  if [ -n "$LABELS" ]; then
    LABELS="$LABELS,area:$SCOPE"
  else
    LABELS="area:$SCOPE"
  fi
fi

ISSUE_NUM=$MANUAL_ISSUE_NUM

# 3. Auto-create GitHub Issue if no manual issue number is provided and gh is installed
if [ -z "$ISSUE_NUM" ] && command -v gh &> /dev/null; then
  echo "🤖 Auto-generating GitHub Issue for this commit..."
  
  CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "unknown")
  
  if [ -n "$TEMPLATE" ] && [ -f "$TEMPLATE" ]; then
    # We will use purely bash replace instead of sed -i to ensure cross-platform Windows compatibility
    TMP_BODY="/tmp/gh_issue_body_$$.md"
    
    # Inject context into template
    sed "s/- \*\*Branch \/ Commit:\*\*/- \*\*Branch:\*\* $CURRENT_BRANCH/" "$TEMPLATE" > "$TMP_BODY"
    
    # Create issue using gh
    # Use grep to check for success because gh sometimes logs extraneous warnings on Windows
    # Extract the issue URL which gh prints to stdout
    ISSUE_URL=$(gh issue create --title "$MESSAGE" --body-file "$TMP_BODY" --label "$LABELS" --assignee "@me" 2>/dev/null)
    
    if [ $? -eq 0 ] && [[ "$ISSUE_URL" == *"github.com"* ]]; then
      ISSUE_NUM=$(echo "$ISSUE_URL" | awk -F'/' '{print $NF}')
      echo "✅ Created Issue #$ISSUE_NUM: $ISSUE_URL"
    else
      echo "⚠️ Failed to create template issue via gh CLI (Rate limit, network, or auth). Proceeding with standard commit."
    fi
    rm -f "$TMP_BODY"
  else
    # Create generic issue if no template matches
    ISSUE_URL=$(gh issue create --title "$MESSAGE" --body "$MESSAGE" --label "$LABELS" --assignee "@me" 2>/dev/null)
    if [ $? -eq 0 ] && [[ "$ISSUE_URL" == *"github.com"* ]]; then
      ISSUE_NUM=$(echo "$ISSUE_URL" | awk -F'/' '{print $NF}')
      echo "✅ Created Issue #$ISSUE_NUM: $ISSUE_URL"
    else
      echo "⚠️ Failed to create generic issue via gh CLI. Proceeding with standard commit."
    fi
  fi
fi

# 4. Construct final commit message
COMMIT_MSG="$MESSAGE"
if [ ! -z "$ISSUE_NUM" ]; then
  COMMIT_MSG="$MESSAGE\n\nFixes #$ISSUE_NUM"
fi

# 5. Version Bump (Patch)
pnpm version patch --no-git-tag-version

# 6. Update Changelog
echo "- $MESSAGE" >> CHANGELOG.md

# 7. Commit
git add .
git commit --no-verify -m "$(echo -e "$COMMIT_MSG")"
echo "🚀 Committed & Version Bumped. [Context: N/A (tracked by agent internally)]"
