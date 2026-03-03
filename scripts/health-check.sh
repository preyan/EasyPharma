#!/bin/bash
echo "🔍 Running EasyPharma Environment Audit..."
export NX_DAEMON=false # Safety for Antigravity

# Check Node & PNPM
node -v && pnpm -v

# Clear zombie workers
pnpm nx reset

# Verify Nx Graph integrity
pnpm nx graph --file=scripts/tmp-graph.json && rm scripts/tmp-graph.json

echo "✅ Environment is STABLE. [Context: $(antigravity --tokens --current)]"