#!/bin/bash
# scripts/init-gh-project.sh
export PATH="$PATH:/c/Program Files/GitHub CLI"
PROJECT_NAME="EasyPharma Roadmap"

echo "🏗️  Checking GitHub Project Board..."

EXISTING=$(gh project list --owner "@me" --limit 20 --format json 2>/dev/null | grep -c "EasyPharma Roadmap" || true)
if [ "$EXISTING" -gt 0 ]; then
  echo "✅ Project '$PROJECT_NAME' already exists. Skipping creation."
else
  gh project create --owner "@me" --title "$PROJECT_NAME"
  echo "✅ Project '$PROJECT_NAME' created."
fi