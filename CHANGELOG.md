# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).



## [1.0.9] - 2026-03-04

### Changed
- **[chore]** reduce emoji usage across repo for professional tone ([`7f6e8dc`](https://github.com/preyan/EasyPharma/commit/7f6e8dcc0dbc98583b13b4bf973e7e539202f71a))

## [1.0.8] - 2026-03-04

### Changed
- **[ci]** fully automate versioning changelog and issue tracking via github actions ([`a5747e1`](https://github.com/preyan/EasyPharma/commit/a5747e1f59e7aa5942943e9278b82434bc23a502))

## [1.0.7] - 2026-03-05

### Fixed

- Hydrate GitHub issue templates with commit context and add CI status auto-checker ([`e328722`](https://github.com/preyan/EasyPharma/commit/e328722))
- Resolve infinite recursion in root `test` script and fix `issue-tracker` workflow ([`0d55092`](https://github.com/preyan/EasyPharma/commit/0d55092))

### Added

- Automated GitHub Issue tracking workflow via `actions/github-script` ([`07c5376`](https://github.com/preyan/EasyPharma/commit/07c5376))
- CI checkbox auto-update workflow (`issue-ci-update.yml`)
- `atomic-commit.sh` now auto-pushes to upstream after commit

### Changed

- Removed recursive root `test` script from `package.json` to prevent CI loop
- Removed obsolete `NX_DAEMON`, `NX_ISOLATE_PLUGINS`, `NX_PLUGIN_NO_TIMEOUTS` patches from `.husky/pre-commit`
- Restored `NX_PLUGIN_NO_TIMEOUTS=true` in `.npmrc` (mandatory on Windows)
- `atomic-commit.sh` uses `--no-verify` to bypass Husky hooks

## [0.0.8] - 2026-03-04

### Fixed

- Resolve failing tests in `shared/prisma` (missing Vitest imports) and `client-web` (broken NxWelcome reference) ([`65dcd0d`](https://github.com/preyan/EasyPharma/commit/65dcd0d))

## [0.0.7] - 2026-03-03

### Added

- Premium Landing Page with glassmorphism design, hero section, and micro-animations ([`dd1fdd4`](https://github.com/preyan/EasyPharma/commit/dd1fdd4))
- Landing page visual mockup and README branding ([`2890bf7`](https://github.com/preyan/EasyPharma/commit/2890bf7))
- Background Task Scheduling (cron jobs) added to Phase 5 roadmap ([`7f7536b`](https://github.com/preyan/EasyPharma/commit/7f7536b))
- Advanced governance templates and security CI workflow ([`4a81396`](https://github.com/preyan/EasyPharma/commit/4a81396))

### Changed

- Transitioned project to proprietary licensing ([`da7ec1c`](https://github.com/preyan/EasyPharma/commit/da7ec1c))
- Locked `main` branch; all development on `develop` ([`ee9c113`](https://github.com/preyan/EasyPharma/commit/ee9c113))
- Hardened `.gitignore` with project-specific rules ([`5d30ed6`](https://github.com/preyan/EasyPharma/commit/5d30ed6))

## [0.0.2] - 2026-03-02

### Added

- Initialized Nx Integrated Workspace with pnpm ([`d20e69a`](https://github.com/preyan/EasyPharma/commit/d20e69a))
- Scaffolded Angular 21 LTS `client-web` (Zoneless, Standalone) ([`50f57fc`](https://github.com/preyan/EasyPharma/commit/50f57fc))
- Scaffolded NestJS 11 LTS `api` (Express) ([`12613fd`](https://github.com/preyan/EasyPharma/commit/12613fd))
- Configured Prisma 7 and scaffolded `libs/shared/prisma` ([`39d5d5d`](https://github.com/preyan/EasyPharma/commit/39d5d5d))
- CI workflow with Nx Cloud self-healing CI ([`f2bc03c`](https://github.com/preyan/EasyPharma/commit/f2bc03c))
- NestJS Swagger CLI Plugin configured ([`6c24de1`](https://github.com/preyan/EasyPharma/commit/6c24de1))
- Comprehensive project README with tech badges ([`d9f3679`](https://github.com/preyan/EasyPharma/commit/d9f3679))

### Fixed

- CI-aware `prepare` script to skip Husky on CI runners ([`9676421`](https://github.com/preyan/EasyPharma/commit/9676421))
- Excluded workspace root from Jest plugin to prevent infinite loop ([`7af5b7e`](https://github.com/preyan/EasyPharma/commit/7af5b7e))
