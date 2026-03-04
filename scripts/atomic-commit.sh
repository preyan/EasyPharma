#!/bin/bash
# Usage: ./scripts/atomic-commit.sh "feat(api): add inventory controller" "[5]"
MESSAGE=$1
ISSUE_NUM=$2

if [ -z "$MESSAGE" ]; then
  echo "❌ ERROR: Commit message is required."
  echo "Usage: ./scripts/atomic-commit.sh \"feat(scope): description\" \"[IssueNumber]\""
  exit 1
fi

COMMIT_MSG="$MESSAGE"
if [ ! -z "$ISSUE_NUM" ]; then
  COMMIT_MSG="$MESSAGE\n\nFixes #$ISSUE_NUM"
fi

# 1. Version Bump (Patch)
pnpm version patch --no-git-tag-version

# 2. Update Changelog (Basic Append - Agent should refine this)
echo "- $MESSAGE" >> CHANGELOG.md

# 3. Commit
git add .
git commit --no-verify -m "$(echo -e "$COMMIT_MSG")"
echo "🚀 Committed & Version Bumped. [Context: N/A (tracked by agent internally)]"
