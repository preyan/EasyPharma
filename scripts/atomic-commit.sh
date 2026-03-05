#!/bin/bash
# Usage: ./scripts/atomic-commit.sh "feat(api): add inventory controller" "[OptionalIssueNumber]"
MESSAGE=$1
ISSUE_NUM=$2

if [ -z "$MESSAGE" ]; then
  echo "❌ ERROR: Commit message is required."
  echo "Usage: ./scripts/atomic-commit.sh \"feat(scope): description\" \"[OptionalIssueNumber]\""
  exit 1
fi

COMMIT_MSG="$MESSAGE"
if [ ! -z "$ISSUE_NUM" ]; then
  COMMIT_MSG="$MESSAGE\n\nFixes #$ISSUE_NUM"
fi

# 1. Commit
git add .
git commit --no-verify -m "$(echo -e "$COMMIT_MSG")"

# 2. Sync and push feature branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" == "develop" ] || [ "$CURRENT_BRANCH" == "main" ]; then
  echo "❌ ERROR: Direct commits to $CURRENT_BRANCH are forbidden. Please use a feature branch."
  exit 1
fi

git push -u origin "$CURRENT_BRANCH"
echo "Committed and pushed to feature branch $CURRENT_BRANCH."
