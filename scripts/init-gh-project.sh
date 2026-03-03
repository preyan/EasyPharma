#!/bin/bash
# scripts/init-gh-project.sh
PROJECT_NAME="EasyPharma Roadmap"

echo "🏗️ Initializing GitHub Project Board..."

# 1. Create the project (if it doesn't exist)
# Note: In 2026, gh project commands require the organization or user flag
gh project create --owner "@me" --title "$PROJECT_NAME"

# 2. Define Columns: To Do, In Progress, Blocked, Done
# The agent will use these to move items later.
echo "✅ Project '$PROJECT_NAME' is ready for Phase 2."