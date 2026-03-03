#!/bin/bash
# Mock-up for Antigravity Context Reporting
# In 2026, most agents respond to internal stats commands
echo "--------------------------------"
echo "🧠 [Context Usage: $(antigravity --tokens --current) / $(antigravity --tokens --max)]"
echo "--------------------------------"