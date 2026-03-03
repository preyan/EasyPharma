#!/bin/bash
# Usage: ./scripts/nx-fix.sh run-many -t test
COMMAND=$@
export NX_DAEMON=false
export NX_ISOLATE_PLUGINS=false
export NX_PLUGIN_WORKER_TIMEOUT=60000

pnpm nx $COMMAND