# 💊 EasyPharma

> A modern, phase-locked, zero-error enterprise pharmacy management system built as a library-first Nx Monorepo.

Welcome to **EasyPharma**, an advanced pharmaceutical inventory and management application. This project is engineered with high scalability, resilience, and strict coding standards meant for production-grade environments.

---

## 🌟 Key Features

- **Enterprise-Grade Security:** JWT-based Authentication, OIDC support, and granular Role-Based Access Control (RBAC).
- **Core Inventory Management:** Real-time, reactive monitoring of pharmaceutical stock using Angular Signals and RxJS.
- **Interactive Experience:** Specialized guest "Demo Mode" accompanied by a guided UI tour.
- **High Performance:** Angular SSR & Hydration for lighting-fast initial loads and top Lighthouse SEO scores.
- **Resilience & Observability:** Global exception filters, Signal Toasts, automated health checks, and structured logging.
- **Robust Documentation:** Auto-generated Swagger OpenAPI specs and Compodoc UI architecture documentation.
- **Cloud-Ready Deployment:** Dockerized multi-stage builds integrated with GitHub Actions CI/CD pipelines.

---

## 🛠️ Technology Stack

The project sits on a cutting-edge, phase-locked stack:

### **Workspace & Tools**
- **Monorepo:** [Nx](https://nx.dev) (Library-first architecture for domain isolation)
- **Package Manager:** [pnpm](https://pnpm.io)
- **Code Quality:** ESLint, Prettier, SonarQube
- **Git Hooks:** Husky, Commitlint (Conventional Commits)

### **Frontend (client-web)**
- **Framework:** [Angular 21 LTS](https://angular.dev)
- **Architecture:** Standalone Components, Zoneless Change Detection (`ExperimentalZonelessChangeDetection` migration)
- **State Management:** NgRx Signal Store
- **Styling:** Tailwind CSS

### **Backend (api)**
- **Framework:** [NestJS 11 LTS](https://nestjs.com/) (Express-based)
- **ORM:** [Prisma 7](https://www.prisma.io/)
- **API Spec:** Swagger (OpenAPI)
- **Security:** `@nestjs/passport`, `@nestjs/jwt`

### **Testing & CI/CD**
- **Unit Testing:** Vitest (Frontend & Libs), Jest (Backend)
- **E2E Testing:** Playwright
- **CI/CD:** GitHub Actions, Docker, Renovate/Dependabot

---

## 📐 High Coding Standards

This project adheres to a **Strict Operational Protocol**:
1. **Zero-Error Tolerance:** The build, test, and lint processes must continuously exit with code `0`.
2. **Atomic Commits:** Uses Conventional Commits. No feature bundling. Incremental root version bumps on every pass.
3. **Phase-Locked Execution:** Development cannot proceed to the next phase without a complete `Phase Audit` of the preceding phase.
4. **Library-First Domain:** Features are generated as Nx libraries under `/libs` rather than stuffed inside application bundles, ensuring high reusability and graph caching efficiency.

---

## 🗺️ Phase-Wise Development Plan

Our roadmap consists of 8 heavily audited phases. 

- [x] **[PHASE 1] Infrastructure & Workspace (The Skeleton):** Initialize Nx, Angular, NestJS, Prisma, and quality gates. Stop at Audit.
- [ ] **[PHASE 2] Security, OIDC & RBAC (The Shield):** Implement JWT Auth, Roles Guards, NgRx Auth Store, and Swagger Config.
- [ ] **[PHASE 3] Core Domain (Inventory Management):** Prisma Schemas, NestJS CRUD handles mapped to Zod, Signal-based Angular tables.
- [ ] **[PHASE 4] Interactive Demo & SSR (The Experience):** Mock services, @angular/cdk/overlay tours, and Angular SSR setup.
- [ ] **[PHASE 5] Resilience & Observability:** NestJS/Angular Exception handling, structural logging, health checks.
- [ ] **[PHASE 6] Documentation & MNC Compliance:** Execute Compodoc, generate Swagger artifacts, enforce 80% Vitest coverage.
- [ ] **[PHASE 7] DevOps & Deployment:** Multi-stage Dockerfiles, GitHub Action configs, automated migrations.
- [ ] **[PHASE 8] Scale & Maintenance:** Redis Caching layers, advanced DB indexing, and pipeline handoff.

---

## ⚙️ Quick Start Setup

### Prerequisites
- Node.js `v20+`
- pnpm `v10+`
- running PostgreSQL/MySQL instance

### Installation
1. Clone the repo and install dependencies:
   ```bash
   git clone https://github.com/your-org/easy-pharma.git
   cd easy-pharma
   pnpm install
   ```

2. Generate Prisma Client logic & push schemas:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

3. Spin up the applications natively:
   ```bash
   # Run NestJS API (http://localhost:3000)
   pnpm nx serve api
   
   # Run Angular App (http://localhost:4200)
   pnpm nx serve client-web
   ```

### Running the Global Audit 🚀
Validate the entire workspace functionality with Nx parallel runners:
```bash
pnpm nx run-many -t lint test build
```

---

*Proprietary Software. Developed for EasyPharma internal usage.*
