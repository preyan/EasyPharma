#!/bin/bash
# Usage: ./scripts/atomic-commit.sh "feat(api): add inventory controller"
MESSAGE=$1

# 1. Version Bump (Patch)
pnpm version patch --no-git-tag-version

# 2. Update Changelog (Basic Append - Agent should refine this)
echo "- $MESSAGE" >> CHANGELOG.md

# 3. Commit
git add .
git commit -m "$MESSAGE"
echo "🚀 Committed & Version Bumped. [Context: $(antigravity --tokens --current)]"