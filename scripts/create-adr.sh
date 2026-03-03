#!/bin/bash
# scripts/create-adr.sh
TITLE=$1
DATE=$(date +%Y-%m-%d)
FILENAME="docs/adr/$(date +%s)-${TITLE// /-}.md"

mkdir -p docs/adr

cat <<EOF > "$FILENAME"
# ADR: $TITLE
**Date**: $DATE
**Status**: Proposed
**Context**: Created by Antigravity Agent for Phase 2.

## Decision
[Agent to fill this in]

## Consequences
[Agent to fill this in]
EOF

echo "📝 ADR Template created at $FILENAME"