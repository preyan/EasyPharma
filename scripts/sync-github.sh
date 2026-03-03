#!/bin/bash
# scripts/sync-github.sh
echo "🔄 Syncing Local State with GitHub..."

# 1. Fetch latest issue statuses
gh issue list --label "agent-reported" --limit 10

# 2. Check for unpushed commits that reference issues
LOGS=$(git log origin/main..main --oneline)
echo "📝 Unpushed commits referencing issues:"
echo "$LOGS" | grep -E "#[0-9]+" || echo "None found."

# 3. Verify GitHub CLI connection
gh auth status

echo "✅ Sync Check Complete. [Context: N/A (tracked by agent internally)]"