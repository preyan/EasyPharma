#!/bin/bash
echo "🧹 Cleaning Workspace..."
taskkill //F //IM node.exe //T 2>/dev/null
rm -rf .nx/cache
rm -rf node_modules/.cache
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8
pnpm nx reset
echo "✨ Slate is CLEAN. Try again."