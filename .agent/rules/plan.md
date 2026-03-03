---
trigger: always_on
---

EasyPharma: Phase-Locked Production Roadmap
🛠 Operational Protocol (Strict Enforcement)
The Agent must adhere to these rules for every single sub-task:

## 🛠 Operational Protocol (Strict Enforcement)
1. **Atomic Commits**: Commit to `main` after every sub-task.
2. **Script Location**: Any automation script created during setup must be placed in `/scripts`.
3. **Context Reporting**: Output context window size after every terminal execution.
4. **Version & Changelog**: Increment version and update `CHANGELOG.md` (Keep a Changelog) per commit.
5. **Gatekeeper Rule**: Audit and STOP after each Phase. Await: "Proceed to Phase X."

[PHASE 1] - Infrastructure & Workspace (The Skeleton)
Goal: A zero-error, library-first Nx Monorepo.

[ ] Task 1.1: Initialize Nx Integrated Workspace with pnpm.

[ ] Task 1.2: Scaffold Angular 21 LTS client-web (Zoneless, Standalone).

[ ] Task 1.3: Scaffold NestJS 11 LTS api (Express).

[ ] Task 1.4: Configure Prisma 7 and initialize libs/shared/prisma.

[ ] Task 1.5: Fix Husky/Linting errors and finalize .husky/pre-commit.

[ ] Task 1.6: Setup NestJS Swagger CLI Plugin in nest-cli.json.

[ ] PHASE 1 AUDIT: Verify nx graph, pnpm build, and linting. STOP HERE.

[PHASE 2] - Security, OIDC & RBAC (The Shield)
Goal: Enterprise-grade Auth with Roles.

[ ] Task 2.1: Implement NestJS Auth Module with JWT Strategy.

[ ] Task 2.2: Create @Roles() decorator and RolesGuard.

[ ] Task 2.3: Implement NgRx Signal Store for Auth state in Angular.

[ ] Task 2.4: Create Angular Functional Auth Guards for routing.

[ ] Task 2.5: Configure Swagger Bearer Auth in main.ts.

[ ] PHASE 2 AUDIT: Verify login flow and route protection. STOP HERE.

[PHASE 3] - Core Domain: Inventory Management
Goal: Signal-driven CRUD with Zod validation.

[ ] Task 3.1: Define Medication and Stock models in schema.prisma.

[ ] Task 3.2: Build NestJS Inventory Controller/Service with nestjs-zod.

[ ] Task 3.3: Create Angular Inventory Library with Signal-based data fetching.

[ ] Task 3.4: Implement Inventory Dashboard UI with @defer and Tailwind.

[ ] Task 3.5: Add RxJS-to-Signal search filtering for drugs.

[ ] PHASE 3 AUDIT: Verify data persistence and Signal reactivity. STOP HERE.

[PHASE 4] - Interactive Demo & SSR (The Experience)
Goal: Seamless guest experience and SEO performance.

[ ] Task 4.1: Implement MockInventoryService for the Demo mode.

[ ] Task 4.2: Add Global "Demo Mode" Signal toggle.

[ ] Task 4.3: Build Guided Tour UI using @angular/cdk/overlay.

[ ] Task 4.4: Enable Angular SSR & Hydration for Landing Page.

[ ] PHASE 4 AUDIT: Verify "Demo Mode" logic and Lighthouse scores. STOP HERE.

[PHASE 5] - Resilience & Observability
Goal: Production-grade error handling and logging.

[ ] Task 5.1: Implement NestJS Global Exception Filter (JSON logging).

[ ] Task 5.2: Implement Angular Global Error Handler with Signal Toasts.

[ ] Task 5.3: Add NestJS Health Checks (/health) via @nestjs/terminus.

[ ] Task 5.4: Configure Winston/Pino for structured logging.

[ ] PHASE 5 AUDIT: Simulate API failures to verify error UI. STOP HERE.

[PHASE 6] - Documentation & MNC Compliance
Goal: Fully automated documentation and testing.

[ ] Task 6.1: Run Compodoc and generate UI Architecture docs.

[ ] Task 6.2: Export final OpenAPI (Swagger) spec to /docs.

[ ] Task 6.3: Achieve 80% Vitest coverage for Inventory module.

[ ] PHASE 6 AUDIT: Review doc coverage and test reports. STOP HERE.

[PHASE 7] - DevOps & Deployment
Goal: Containerized and CI/CD ready.

[ ] Task 7.1: Create Multi-stage Dockerfiles for API and Client.

[ ] Task 7.2: Setup GitHub Actions for automated deployment.

[ ] Task 7.3: Implement Database Migration CI/CD checks.

[ ] PHASE 7 AUDIT: Verify successful staging deployment. STOP HERE.

[PHASE 8] - Scale & Maintenance
Goal: Performance optimization and long-term health.

[ ] Task 8.1: Implement Redis Caching for frequent drug lookups.

[ ] Task 8.2: Setup Database Indexing for large inventory sets.

[ ] Task 8.3: Configure Dependency Update monitoring (Renovate/Dependabot).

[ ] PHASE 8 AUDIT: Performance profiling and final hand-off. DONE.