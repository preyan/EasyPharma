#!/bin/bash
# scripts/verify-state.sh
echo "🧐 Verifying Filesystem Integrity..."

# Check for key MNC monorepo markers
FILES=(".agent/rules/plan.md" "nx.json" "pnpm-workspace.yaml" "scripts/health-check.sh")

for file in "${FILES[@]}"; do
  if [ -f "$file" ]; then
    echo "✅ FOUND: $file"
  else
    echo "❌ MISSING: $file"
  fi
done

# Check current branch and dirty state
git status --short

echo "🧠 [Context Usage: $(antigravity --tokens --current) / $(antigravity --tokens --max)]"