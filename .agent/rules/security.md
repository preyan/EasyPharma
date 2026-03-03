# Pharmacy Security Rules
- **Auth**: Implement OIDC/JWT. All endpoints are protected by default.
- **RBAC**: Use @Roles('Admin', 'Pharmacist') decorators for NestJS and Functional Guards for Angular.
- **PII**: Mask Patient Identifiable Information in API responses using DTOs.
- **Audit**: Every inventory or prescription change must log the actor's ID.
