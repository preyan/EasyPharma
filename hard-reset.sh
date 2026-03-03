#!/bin/sh
# 1. Kill all hidden Node and Nx background processes
taskkill //F //IM node.exe //T
taskkill //F //IM nx.exe //T

# 2. Wipe the "Corrupted" artifacts
# This removes the locked node_modules and the broken Nx cache
rm -rf node_modules .nx pnpm-lock.yaml .pnpm-store

# 3. Clear Antigravity's Agent Memory
# (If you have a .agent/tmp or .agent/cache folder, clear it)
rm -rf .agent/cache

# 4. Clean the pnpm global cache
pnpm store prune

# 5. Re-initialize the Shell environment for UTF-8 and Stability
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8
export NX_DAEMON=false
export NX_ISOLATE_PLUGINS=false

echo "✨ Workspace Purged. Ready for clean install."