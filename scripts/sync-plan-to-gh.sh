#!/bin/bash
# scripts/sync-plan-to-gh.sh
# Migrates all plan.md tasks to GitHub Issues on the EasyPharma Roadmap board
export PATH="$PATH:/c/Program Files/GitHub CLI"
set -e

PROJECT_NUM=3
OWNER="@me"
REPO="preyan/EasyPharma"
PLAN_FILE=".agent/rules/plan.md"

echo "🚀 Starting roadmap migration to GitHub Project Board..."

# ── Helper: ensure a label exists ─────────────────────────────────────────────
ensure_label() {
  local label=$1 color=$2 desc=$3
  gh label create "$label" --color "$color" --description "$desc" --repo "$REPO" 2>/dev/null || true
}

# ── Create phase labels ────────────────────────────────────────────────────────
echo "🏷️  Creating phase labels..."
ensure_label "phase:1" "0075ca" "Phase 1 – Infrastructure & Workspace"
ensure_label "phase:2" "e4e669" "Phase 2 – Security, OIDC & RBAC"
ensure_label "phase:3" "d93f0b" "Phase 3 – Core Domain: Inventory"
ensure_label "phase:4" "0e8a16" "Phase 4 – Interactive Demo & SSR"
ensure_label "phase:5" "5319e7" "Phase 5 – Resilience & Observability"
ensure_label "phase:6" "f9d0c4" "Phase 6 – Documentation & Compliance"
ensure_label "phase:7" "1d76db" "Phase 7 – DevOps & Deployment"
ensure_label "phase:8" "b60205" "Phase 8 – Scale & Maintenance"
ensure_label "agent-reported" "cccccc" "Created by the Antigravity agent"
echo "✅ Labels ready."

# ── Task definitions ───────────────────────────────────────────────────────────
# Format: "phase|task_id|title|body"
TASKS=(
  "1|1.1|Initialize Nx Integrated Workspace with pnpm|Set up the Nx integrated monorepo with pnpm as the package manager. Scaffold the workspace root with nx.json, pnpm-workspace.yaml, and shared tsconfig."
  "1|1.2|Scaffold Angular 21 LTS client-web (Zoneless, Standalone)|Generate the Angular 21 application using Nx generator with Zoneless change detection and standalone component architecture."
  "1|1.3|Scaffold NestJS 11 LTS api (Express)|Generate the NestJS 11 API application using Nx generator with Express as the platform adapter."
  "1|1.4|Configure Prisma 7 and initialize libs/shared/prisma|Set up Prisma 7 as the ORM with schema-first approach. Initialize the shared prisma library under libs/shared/prisma."
  "1|1.5|Fix Husky/Linting errors and finalize .husky/pre-commit|Resolve all Husky configuration issues. Finalize the pre-commit hook to run lint and test on affected projects."
  "1|1.6|Setup NestJS Swagger CLI Plugin in nest-cli.json|Configure the NestJS Swagger CLI plugin in nest-cli.json to enable auto-generated OpenAPI documentation."
  "1|AUDIT|PHASE 1 AUDIT: Verify nx graph, pnpm build, and linting|Run the full Phase 1 audit: verify nx graph integrity, confirm zero-error pnpm build, and pass lint across all projects."
  "2|2.1|Implement NestJS Auth Module with JWT Strategy|Build the NestJS Auth module with Passport JWT strategy. Implement login endpoint and JWT token issuance."
  "2|2.2|Create @Roles() decorator and RolesGuard|Implement the @Roles() custom decorator and RolesGuard to enforce RBAC across API endpoints."
  "2|2.3|Implement NgRx Signal Store for Auth state in Angular|Build the Angular auth state management using NgRx Signal Store. Handle login, logout, and token persistence."
  "2|2.4|Create Angular Functional Auth Guards for routing|Implement Angular functional guards (canActivate) to protect routes based on auth state and roles."
  "2|2.5|Configure Swagger Bearer Auth in main.ts|Add BearerAuth configuration to the NestJS Swagger setup in main.ts to enable JWT auth in the API docs UI."
  "2|AUDIT|PHASE 2 AUDIT: Verify login flow and route protection|Run the full Phase 2 audit: verify end-to-end login flow, JWT issuance, and Angular route protection."
  "3|3.1|Define Medication and Stock models in schema.prisma|Add Medication, Stock, and related Prisma models to schema.prisma. Run migration to create the database tables."
  "3|3.2|Build NestJS Inventory Controller/Service with nestjs-zod|Implement the Inventory CRUD API using NestJS with nestjs-zod for request/response validation."
  "3|3.3|Create Angular Inventory Library with Signal-based data fetching|Build the Angular inventory library under libs/client/inventory with Signal-based HTTP data fetching."
  "3|3.4|Implement Inventory Dashboard UI with @defer and Tailwind|Build the Inventory Dashboard UI component using Angular @defer for lazy loading and Tailwind CSS for styling."
  "3|3.5|Add RxJS-to-Signal search filtering for drugs|Implement a reactive search filter for the drug inventory list, converting RxJS observables to Angular Signals."
  "3|AUDIT|PHASE 3 AUDIT: Verify data persistence and Signal reactivity|Run the full Phase 3 audit: verify Prisma data persistence, API CRUD operations, and Angular Signal reactivity."
  "4|4.1|Implement MockInventoryService for the Demo mode|Create a MockInventoryService that returns static data to power the guest demo experience without a database."
  "4|4.2|Add Global 'Demo Mode' Signal toggle|Implement a global Angular Signal that toggles between real API mode and demo/mock mode across the entire application."
  "4|4.3|Build Guided Tour UI using @angular/cdk/overlay|Use Angular CDK Overlay to build an interactive guided tour component for new users in demo mode."
  "4|4.4|Enable Angular SSR & Hydration for Landing Page|Configure Angular Universal SSR and hydration for the landing page to improve initial load performance and SEO."
  "4|AUDIT|PHASE 4 AUDIT: Verify Demo Mode logic and Lighthouse scores|Run the full Phase 4 audit: verify demo mode switch, guided tour flow, and Lighthouse performance scores."
  "5|5.1|Implement NestJS Global Exception Filter (JSON logging)|Create a global NestJS exception filter that catches all unhandled errors and returns structured JSON error responses."
  "5|5.2|Implement Angular Global Error Handler with Signal Toasts|Build an Angular global error handler that catches client-side errors and displays them as Signal-driven toast notifications."
  "5|5.3|Add NestJS Health Checks (/health) via @nestjs/terminus|Configure @nestjs/terminus to expose a /health endpoint that checks database connectivity and system status."
  "5|5.4|Configure Winston/Pino for structured logging|Integrate Winston or Pino into the NestJS API for structured JSON logging with log levels and request correlation IDs."
  "5|AUDIT|PHASE 5 AUDIT: Simulate API failures to verify error UI|Run the full Phase 5 audit: simulate API failures and verify the error handler, toast notifications, and /health endpoint."
  "6|6.1|Run Compodoc and generate UI Architecture docs|Execute Compodoc to generate Angular architecture documentation from JSDoc comments and component metadata."
  "6|6.2|Export final OpenAPI (Swagger) spec to /docs|Export the NestJS-generated OpenAPI spec as a static JSON/YAML file to the /docs directory for version-controlled API docs."
  "6|6.3|Achieve 80% Vitest coverage for Inventory module|Write sufficient unit and integration tests for the Inventory module to reach and maintain 80% Vitest code coverage."
  "6|AUDIT|PHASE 6 AUDIT: Review doc coverage and test reports|Run the full Phase 6 audit: review Compodoc coverage report, OpenAPI spec completeness, and Vitest coverage thresholds."
  "7|7.1|Create Multi-stage Dockerfiles for API and Client|Write optimized multi-stage Dockerfiles for the NestJS API and Angular client-web apps for production deployment."
  "7|7.2|Setup GitHub Actions for automated deployment|Create GitHub Actions workflows to build Docker images and deploy to staging/production on push to main."
  "7|7.3|Implement Database Migration CI/CD checks|Add a CI step that runs Prisma migrate deploy to apply pending migrations as part of the deployment pipeline."
  "7|AUDIT|PHASE 7 AUDIT: Verify successful staging deployment|Run the full Phase 7 audit: verify Docker images build correctly, deployment pipeline runs, and staging environment is healthy."
  "8|8.1|Implement Redis Caching for frequent drug lookups|Integrate Redis caching into the NestJS API for frequently accessed drug inventory queries to reduce database load."
  "8|8.2|Setup Database Indexing for large inventory sets|Analyze and add database indexes to the Prisma schema for fields used in frequent queries on large inventory datasets."
  "8|8.3|Configure Dependency Update monitoring (Renovate/Dependabot)|Set up Renovate or GitHub Dependabot to automatically monitor and propose updates for outdated dependencies."
  "8|AUDIT|PHASE 8 AUDIT: Performance profiling and final hand-off|Run the full Phase 8 audit: performance profiling, cache hit-rate validation, and final project hand-off documentation."
)

# ── Create issues and add to board ────────────────────────────────────────────
CREATED=0
declare -A TASK_TO_ISSUE

echo ""
echo "📋 Creating GitHub Issues..."

for entry in "${TASKS[@]}"; do
  IFS='|' read -r phase task_id title body <<< "$entry"
  label="phase:$phase"

  # Create issue
  ISSUE_URL=$(gh issue create \
    --repo "$REPO" \
    --title "[Phase $phase | Task $task_id] $title" \
    --body "$body" \
    --label "$label" \
    --label "agent-reported" 2>&1)

  ISSUE_NUM=$(echo "$ISSUE_URL" | grep -oE '[0-9]+$')
  echo "  ✅ #$ISSUE_NUM → Phase $phase | Task $task_id"

  # Add to project board
  gh project item-add "$PROJECT_NUM" --owner "$OWNER" --url "$ISSUE_URL" 2>/dev/null || true

  # Store for plan.md update
  TASK_TO_ISSUE["$phase|$task_id"]="$ISSUE_URL"
  CREATED=$((CREATED + 1))
done

echo ""
echo "🔗 Updating plan.md with issue URLs..."

# ── Update plan.md ─────────────────────────────────────────────────────────────
PLAN_CONTENT=$(cat "$PLAN_FILE")

for entry in "${TASKS[@]}"; do
  IFS='|' read -r phase task_id title body <<< "$entry"
  ISSUE_URL="${TASK_TO_ISSUE[$phase|$task_id]}"
  if [ -n "$ISSUE_URL" ] && [ "$task_id" != "AUDIT" ]; then
    # Replace "Task X.X: Title" line with "Task X.X: Title → URL"
    sed -i "s|Task $task_id: $title|Task $task_id: $title → $ISSUE_URL|g" "$PLAN_FILE"
  fi
done

echo "✅ plan.md updated with issue links."
echo ""
echo "═══════════════════════════════════════════════"
echo "🎉 Migration Complete!"
echo "   Issues created : $CREATED"
echo "   Project board  : https://github.com/users/preyan/projects/$PROJECT_NUM"
echo "═══════════════════════════════════════════════"
