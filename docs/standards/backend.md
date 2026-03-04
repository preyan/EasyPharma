# NestJS 11 Standards

## Architecture

- **Adapter**: Express (Standard LTS).
- **Core Pattern**: `Controller` -> `Service` -> `Prisma Repository`.
- **Modularity**: Domain-logic should reside in libraries (`/libs`), with apps serving as entry points.

## Validation & Typing

- **Schema Validation**: Use Zod with `nestjs-zod` for all DTOs and runtime validation.
- **Prisma**: Schema-first development using Prisma 7.

## Documentation

- **Swagger**: Auto-generate API documentation.
- **Plugin**: Ensure `@nestjs/swagger/plugin` is enabled in `nest-cli.json` for automatic metadata generation.

## Resilience

- **Exceptions**: Use Global Exception Filters for consistent JSON error logging.
- **Logging**: Use Pino or Winston for structured, machine-readable logs.
