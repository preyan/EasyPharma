#!/bin/bash
# scripts/report-blocker.sh
TITLE=$1
# Path to your new template (e.g., .github/ISSUE_TEMPLATE/bug_report.md)
TEMPLATE_PATH=".github/ISSUE_TEMPLATE/bug_report.md"

echo "🚨 Reporting blocker using the Bug Report Template..."

# If the template exists, use it as the body baseline
if [ -f "$TEMPLATE_PATH" ]; then
    # We use --body-file to pull in the template structure
    ISSUE_URL=$(gh issue create --title "[Agent] $TITLE" --body-file "$TEMPLATE_PATH" --label "agent-reported")
else
    # Fallback if template is missing
    ISSUE_URL=$(gh issue create --title "[Agent] $TITLE" --body "Bug report template missing. Manual audit required.")
fi

echo "✅ Issue created: $ISSUE_URL"