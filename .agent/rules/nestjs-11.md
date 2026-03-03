# NestJS 11 LTS Rules
- **Adapter**: Express (Standard LTS).
- **Auto-Docs**: Ensure 'compilerOptions.plugins' in nest-cli.json includes '@nestjs/swagger/plugin'.
- **Validation**: Use Zod with 'nestjs-zod' for DTOs and runtime validation.
- **Architecture**: Controller -> Service -> Prisma Repository pattern.
