#!/bin/bash

# Configuration
export PATH="$PATH:/c/Program Files/GitHub CLI"
export MSYS_NO_PATHCONV=1
OWNER="preyan"
REPO="EasyPharma"

echo "Applying protection to branch: main"
gh api --method PUT repos/$OWNER/$REPO/branches/main/protection --input - <<EOF
{
  "required_status_checks": {
    "strict": true,
    "contexts": ["CI", "Compliance & Docs"]
  },
  "enforce_admins": true,
  "required_pull_request_reviews": null,
  "restrictions": null,
  "allow_force_pushes": false,
  "allow_deletions": false
}
EOF

echo "Applying protection to branch: develop"
gh api --method PUT repos/$OWNER/$REPO/branches/develop/protection --input - <<EOF
{
  "required_status_checks": null,
  "enforce_admins": false,
  "required_pull_request_reviews": null,
  "restrictions": null,
  "allow_force_pushes": false,
  "allow_deletions": false
}
EOF

echo "✅ Branch protection rules applied."
