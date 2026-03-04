# Security Standards

## Authentication & Authorization

- **Protocols**: Implement OIDC and JWT.
- **Default Deny**: All endpoints must be protected by default.
- **RBAC**:
  - **Backend**: Use `@Roles('Admin', 'Pharmacist')` decorators with a global `RolesGuard`.
  - **Frontend**: Use Functional Auth Guards for route protection.

## Data Privacy

- **PII Protection**: Mask Patient Identifiable Information (PII) in API responses using specialized DTOs.
- **Audit Logging**: Every inventory or prescription modification must log the Actor's ID and timestamp.

## Infrastructure

- **Secret Scanning**: Mandatory usage of TruffleHog in CI to detect credential leaks.
- **Security Headers**: Implement standard security headers (CSP, HSTS, etc.) in the API.
