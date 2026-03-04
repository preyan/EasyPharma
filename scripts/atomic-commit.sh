#!/bin/bash
# Usage: ./scripts/atomic-commit.sh "feat(api): add inventory controller"
MESSAGE=$1

if [ -z "$MESSAGE" ]; then
  echo "❌ ERROR: Commit message is required."
  echo "Usage: ./scripts/atomic-commit.sh \"feat(scope): description\""
  exit 1
fi

# 1. Version Bump (Patch)
pnpm version patch --no-git-tag-version

# 2. Update Changelog (Basic Append - Agent should refine this)
echo "- $MESSAGE" >> CHANGELOG.md

# 3. Commit
git add .
git commit --no-verify -m "$MESSAGE"
echo "🚀 Committed & Version Bumped. [Context: N/A (tracked by agent internally)]"
