# EasyPharma Global Rules

## Deployment & Sync Protocol

- **Pull Before Push**: Always perform `git pull --rebase` before pushing to avoid non-fast-forward rejections. This is natively enforced in `scripts/atomic-commit.sh`.
- **Atomic Commits**: Commit to `develop` after every sub-task. Incremental, atomic changes only.
- **Main Protection**: The `main` branch is reserved for production-ready Phase releases only.

## Technical Standards

- **LTS Strictness**: Use Angular 21.x and NestJS 11.x (Express).
- **Architecture**: Nx Monorepo with Domain-Driven Design (DDD).
- **ORM**: Prisma 7 (Schema-first).
- **Testing**: Vitest for Unit/Integration and Playwright for E2E. Minimum 80% coverage required.

## Workflow Automation

- **Conventional Commits**: All commit messages must follow the `feat/fix/chore(scope): description` format.
- **Auto-Issue Tracking**: GitHub Actions automatically creates, links, and closes issues based on commit messages.
- **Version Management**: Automated by CI for every push to `develop`.

## Environment

- **Shell**: Git Bash (MINGW64) is the mandatory shell for all scripts and terminal commands.
- **Execution**: All automation scripts must reside in `/scripts`.
