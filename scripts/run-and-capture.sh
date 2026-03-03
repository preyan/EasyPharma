#!/bin/bash
# scripts/run-and-capture.sh
COMMAND=$@
LOG_DIR="logs"
LOG_FILE="$LOG_DIR/last_execution.log"

mkdir -p $LOG_DIR

echo "🚀 Executing: $COMMAND"
# Run command and capture both stdout and stderr
eval $COMMAND > $LOG_FILE 2>&1
EXIT_CODE=$?

if [ $EXIT_CODE -ne 0 ]; then
  echo "❌ Command failed with exit code $EXIT_CODE."
  echo "🔍 Full log captured at $LOG_FILE. Analyzing top 50 lines..."
  head -n 50 $LOG_FILE
else
  echo "✅ Command succeeded."
  rm $LOG_FILE
fi

exit $EXIT_CODE