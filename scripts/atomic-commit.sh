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

# 2. Push to upstream (GitHub Actions handles versioning, changelog, and issue tracking)
git push
echo "🚀 Committed & Pushed. [CI handles versioning, changelog, and issue tracking]"
