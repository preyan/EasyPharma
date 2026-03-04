# EasyPharma Roadmap: Phase-Locked Production

This project follows a strict 8-Phase implementation strategy. Each phase must be audited and verified before proceeding to the next.

## [PHASE 1] - Infrastructure & Workspace (The Skeleton)

**Goal**: Zero-error, library-first Nx Monorepo.

- Nx Integrated Workspace (pnpm).
- Angular 21 (Zoneless) & NestJS 11 LTS.
- Prisma 7 Shared Infrastructure.
- GitHub Actions Automation Engine.

## [PHASE 2] - Security, OIDC & RBAC (The Shield)

**Goal**: Enterprise-grade Auth with Roles.

- NestJS JWT & OIDC Strategies.
- Functional Guards & RBAC Roles.
- NgRx Signal Store for Auth.

## [PHASE 3] - Core Domain: Inventory Management

**Goal**: Signal-driven CRUD with Zod validation.

- Medication & Stock Schema.
- Inventory API & Controller.
- Angular Inventory Library.

## [PHASE 4] - Interactive Demo & SSR (The Experience)

**Goal**: SEO performance and Guided UX.

- Global Demo Mode Signal.
- Angular Universal (SSR) & Hydration.
- Guided Tour UI.

## [PHASE 5] - Resilience & Observability

**Goal**: Production-grade logging and health monitoring.

- Global Exception Filters.
- Structured Logging (Pino/Winston).
- Background Expiry Sentinels (Cron).

## [PHASE 6] - Documentation & Compliance

**Goal**: 100% Automated documentation & coverage.

- API Spec (OpenAPI/Swagger) Export.
- UI Architecture (Compodoc) Generation.
- 80% Vitest Coverage achievement.

## [PHASE 7] - DevOps & Deployment

**Goal**: Containerized production readiness.

- Multi-stage Dockerfiles.
- GitHub Actions Deployment Workflows.
- Database Migration CI/CD.

## [PHASE 8] - Scale & Maintenance

**Goal**: Performance profiling and long-term health.

- Redis Caching Layer.
- Database Indexing Optimization.
- Dependency Update monitoring.
