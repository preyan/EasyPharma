# EasyPharma Documentation Hub

Welcome to the official documentation for the EasyPharma Workspace. This project is built under an **absolute zero-error threshold** and follows strict architectural protocols.

## 🏛️ Project Architecture

- **[Phase-Locked Roadmap](architecture/roadmap.md)**: Our 8-Phase sequence from skeleton to production scale.

## 📐 Standards & Protocols

- **[Git & Commit Workflow](standards/git-workflow.md)**: Conventional commits, pull-before-push, and atomic deployment rules.
- **[Frontend Standards](standards/frontend.md)**: Angular 21, Signals, Zoneless, and premium UI criteria.
- **[Backend Standards](standards/backend.md)**: NestJS 11, Express, Prisma 7, and Zod validation.
- **[Security Protocols](standards/security.md)**: OIDC, JWT, RBAC, and PII protection rules.

## 🛠️ Operational Rules

1. **LTS Only**: Strictly Angular 21.x and NestJS 11.x.
2. **Library-First**: All domain logic lives in `/libs`.
3. **Automated Hygiene**: CI/CD handles linting, testing, and documentation generation.
4. **Pull Before Push**: Enforced via `scripts/atomic-commit.sh` to prevent race conditions.

---

_Developed under absolute zero-error threshold coding standards._
