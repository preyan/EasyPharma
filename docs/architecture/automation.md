# GitHub Actions Automation Suite

The EasyPharma workspace is powered by a comprehensive GitHub Actions engine that handles everything from developer experience to production security.

## 🚀 Core Workflows

### 1. CI (Continuous Integration)

- **File**: `ci.yml`
- **Purpose**: Runs on every push to `develop` and `main` and all Pull Requests.
- **Actions**: Performs full workspace health check (lint, test, build) using Nx caching for maximum speed.

### 2. Issue Tracking & Traceability

- **File**: `issue-tracker.yml`
- **Purpose**: Automates the entire project management lifecycle.
- **Actions**:
  - Parses commit messages (Conventional Commits).
  - Automatically creates GitHub Issues for `feat:`, `fix:`, and `chore:`.
  - Links commits to issues and automatically closes them upon push to `develop`.

### 3. Compliance & Docs

- **Files**: `ci-docs.yml`, `coverage.yml`, `readme-update.yml`
- **Purpose**: Ensures quality standards and live project metrics.
- **Actions**:
  - **Coverage**: Generates live test coverage badges.
  - **Dynamic README**: Automatically updates version, dependency tables, contributor lists, and phase progress in `README.md`.
  - **Broken Links**: Weekly verification of all documentation links.

## 🛡️ Security & Resilience

### 4. Security Scanning

- **Files**: `secret-scanning.yml`, `codeql.yml`
- **Purpose**: Guards against vulnerabilities and leaks.
- **Actions**:
  - **Secret Scanning**: Uses TruffleHog to detect credentials in commits.
  - **CodeQL**: Performs static analysis to detect common code vulnerabilities.

### 5. API Health & Compliance

- **Files**: `health-check.yml`, `swagger-diff.yml`
- **Purpose**: Monitors API stability and contract changes.
- **Actions**:
  - **Swagger Diff**: Automatically posts API contract changes to PRs.
  - **Health Check**: Daily verification of development/production endpoints.

## 📦 Release & PR Management

### 6. Release Workflow

- **Files**: `release-drafter.yml`, `pr-enforcer.yml`, `pr-labeler.yml`
- **Purpose**: Professional release management.
- **Actions**:
  - **Release Drafter**: Automatically compiles changelogs and drafts GitHub Releases.
  - **PR Enforcer**: Ensures all PRs follow the mandatory template.
  - **Size Labeler**: Categorizes PRs by lines of code changed.

### 7. Maintenance

- **Files**: `stale.yml`, `dependabot-automerge.yml`
- **Purpose**: Repository hygiene.
- **Actions**:
  - **Stale Closer**: Closes inactive issues/PRs after 30 days of inactivity.
  - **Dependabot Grouping**: Groups dependency updates into single weekly PRs to reduce noise.

---

_Developed under absolute zero-error threshold coding standards._
