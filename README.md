# 💊 EasyPharma Workspace

[![CI](https://github.com/preyan/EasyPharma/actions/workflows/ci.yml/badge.svg)](https://github.com/preyan/EasyPharma/actions/workflows/ci.yml)
[![Compliance & Docs](https://github.com/preyan/EasyPharma/actions/workflows/ci-docs.yml/badge.svg)](https://github.com/preyan/EasyPharma/actions/workflows/ci-docs.yml)
[![Nx](https://img.shields.io/badge/Nx-smart--monorepo-blue?logo=nx&logoColor=white)](https://nx.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-teal.svg)](https://opensource.org/licenses/MIT)

> **A secure, phase-locked, and resilient enterprise API and Client solution natively constructed in an Nx Monorepo.**

EasyPharma represents an absolute standard in architectural fidelity. Every component within is intentionally modular, inherently scalable, and explicitly secured for Enterprise deployment footprints.

---

## 🌟 Key Features

### 🔐 Enterprise-Grade Security

- **JWT & OIDC Authentication Contexts:** Centralized authorization via `@nestjs/passport` ensuring protected resource availability strictly based on trust.
- **Granular RBAC System:** Application-wide Role-Based Access Control enforcing specific domain access (Admin vs. Pharmacist) by declarative `@Roles()` decorators.
- **Swagger Bearer Authentication:** Built-in Swagger UI bearer token configuration out-of-the-box.

### ⏱️ Instant Front-End Reactivity

- **Zoneless Change Detection:** Next-generation Angular 21 rendering engine without Zone.js overhead (`ExperimentalZonelessChangeDetection` enabled for superior runtime performance).
- **NgRx Signal Stores:** Deep integration with Angular's reactive Signals primitive coupled with RxJS streams for real-world telemetry reporting.

### 🚀 Production Reliability & UX

- **Interactive Demo Architectures:** Sandboxed UI layer with `@angular/cdk/overlay` guided tours.
- **SSR & Universal Hydration:** Improved Time-To-Interactive (TTI) indices resulting in maximum SEO footprints.
- **Exception Telemetry:** Centralized NestJS Exception Filtration and Angular global structural logging logic powered by Winston/Pino protocols.

---

## 🎨 Visual Identity

EasyPharma features a high-end, premium aesthetic built with modern glassmorphism and a deep-space productivity theme.

![EasyPharma Landing Page](docs/images/landing-page.png)

_The landing page features a minimalist dark-mode dashboard, fluid gradients, and a responsive glassmorphism UI._

---

## 🛠️ Technology Stack Breakdown

| Layer                  | Technology Set                                          |
| :--------------------- | :------------------------------------------------------ |
| **Workspace Platform** | `Nx Monorepo`, `pnpm`                                   |
| **Backend Core**       | `NestJS 11 LTS`, `Express`, `TypeScript`                |
| **Database Gateway**   | `Prisma ORM 7`, `Zod Validation`                        |
| **Frontend Core**      | `Angular 21 LTS`, `NgRx Signal Stores`, `RxJS`          |
| **Testing Regimen**    | `Vitest`, `Jest`, `Playwright`                          |
| **CI/CD Triggers**     | `Husky Hooks`, `Conventional Commits`, `GitHub Actions` |

---

## 📐 Strict Coding Protocols

Our application runs entirely based on the following rules:

1.  **Zero-Error Threshold:** The application is blocked from committing if any compiler, test, or linting anomaly arises.
2.  **Library-First Domain Separation:** Features live inside `/libs` and are selectively exposed. The `api` and `client-web` app directories act solely as entry points to wire libraries together, enforcing decoupled architecture out of the box.
3.  **Audited Lifecycle Phases:** We follow a disciplined, 8-Phase sequence, validating and locking all modules in each phase prior to continuing.

---

## 🗺️ The Eight-Phase Implementation Plan

We are executing software creation structurally and surgically.

- ✅ **[PHASE 1] Infrastructure & Workspace (The Skeleton):**
  - Initialize Nx, Angular, NestJS, Prisma, and quality gates.
  - Repository cleanup and premium Landing Page implementation. Audit complete.
- ❌ **[PHASE 2] Security, OIDC & RBAC (The Shield):**
  - Auth service context execution, JWT strategy implementations, Role guards, and Swagger integrations.
- ❌ **[PHASE 3] Core Domain (Inventory Flow):**
  - Database schema pushes, NestJS CRUD interfaces with Zod payload parsings. Signal-driven UI tables.
- ❌ **[PHASE 4] Guest Demonstrations & SSR:**
  - Deploy SSR structures out of the box. Hook mock APIs, execute interactive CDK overlay tours globally.
- ❌ **[PHASE 5] Resilience Validation:**
  - Automated Health Status APIs (`/health`). Implement Global Exception filters outputting format-ready JSON traces.
- ❌ **[PHASE 6] Compliance Generation:**
  - Compile automated codebase Compodoc metrics and finalized Open-API specs for third-party auditing. Target >80% code coverage threshold.
- ❌ **[PHASE 7] CI/CD Implementations:**
  - Stage multi-layer Dockerfiles pushing straight through GitHub actions integration triggers.
- ❌ **[PHASE 8] Scale Strategies:**
  - Wire-up database scaling triggers, apply Redis query cache pipelines for maximum I/O. Hand-off package maintenance processes.

---

## ⚙️ Quick Start Installation

Ensure you have Node 20+ and pnpm installed natively.

1.  **Clone down the mono-repo stack:**

    ```bash
    git clone https://github.com/your-org/easy-pharma.git
    cd easy-pharma
    pnpm install
    ```

2.  **Generate Prisma ORM contexts:**

    ```bash
    npx prisma generate
    npx prisma db push
    ```

3.  **Commence Live Server Environments:**

    ```bash
    # Execute the Backend Router Gateway on :3000
    pnpm nx serve api

    # Execute the Angular Signal App on :4200
    pnpm nx serve client-web
    ```

4.  **Confirm Overall Workspace Health:**
    ```bash
    pnpm nx run-many -t lint test build
    ```

---

> _Developed under absolute zero-error threshold coding standards._
