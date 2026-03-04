# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.2] - 2026-03-03
### Added
- Initialized Nx Integrated Workspace with pnpm.
- Added `@nx/workspace`, `nx`, and `typescript` as devDependencies.
- build: implement test and diagnostics toolkit scripts
- chore(core): add toolkit setup properly matching globals
- chore(setup): merge scripts and configure baseline setup
- fix(scripts): harden all scripts — correct shebang, taskkill guards, input validation, and remove phantom CLI calls
- fix(ci): bump node to 22, fix pnpm action v4, modernize nx affected syntax, remove phantom targets
- fix: resolve failing tests in shared/prisma and client-web
- chore(workspace): enforce NX_PLUGIN_NO_TIMEOUTS across monorepo
- chore(husky): activate nx affected checks on pre-commit
- fix(workspace): permanently disable unstable nx dynamic node plugins
- chore(git): bypass husky hooks for faster commits on windows
- feat(scripts): implement automated github issue tracking via gh cli
- ci(github): add automated professional issue tracking workflow
