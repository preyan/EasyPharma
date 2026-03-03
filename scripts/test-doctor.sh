#!/bin/bash
# scripts/test-doctor.sh
PROJECT=$1
echo "🩺 Diagnosing test failures for $PROJECT..."

# 1. Kill potential zombie test runners
taskkill //F //IM node.exe //T 2>/dev/null

# 2. Clear Nx and Jest/Vitest caches
pnpm nx reset
rm -rf .nx/cache

# 3. Run test with 'no-cache' and 'verbose' to see actual failure
echo "🏃 Running clean test..."
pnpm nx test $PROJECT --skip-nx-cache --verbose

echo "🧠 [Context Usage: $(antigravity --tokens --current) / $(antigravity --tokens --max)]"