# Git & Commit Standards

## Commit Protocol

- **Pull Before Push**: Mandatory `git pull --rebase` before any push. This is enforced in the `atomic-commit.sh` automation script.
- **Conventional Commits**: All commit messages must follow the standard prefix format:
  - `feat`: New feature.
  - `fix`: Bug fix.
  - `docs`: Documentation changes.
  - `chore`: Infrastructure, deps, or maintenance.
  - `refactor`: Code restructuring without functional change.
- **Traceability**: Every commit MUST include a reference to the relevant GitHub Issue (e.g., `Fixes #12` or `Refs #45`).

## Branching Strategy

- **`develop`**: The active development branch. Features and fixes are merged here.
- **`main`**: The production branch. Changes are merged here only at the end of a Phase Audit.
- **Release PRs**: Always create a PR from `develop` to `main` for Phase promotions, including a full verification summary and screenshots.
- **Required Status Checks**: No Pull Request should be merged unless the following major CI pipelines pass:
  - `CI` (Build, Test, Lint)
  - `Compliance & Docs`
  - `Secret Scanning`
  - `CodeQL`
  - `Bundle Size Check`
  - `PR Enforcer`
  - `Coverage Badge`

## Automation Script: `scripts/atomic-commit.sh`

Usage:

```bash
bash scripts/atomic-commit.sh "feat(api): add inventory controller" "[IssueID]"
```

This script ensures:

1. Version increment (via CI).
2. Changelog update (via CI).
3. Conflict avoidance (via explicit rebase-pull).
4. Automation trigger (via standard push).
