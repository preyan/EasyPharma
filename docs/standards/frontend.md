# Angular 21 Standards

## Core Principles

- **Reactivity**: Use Signals for local state management.
- **Global State**: Use NgRx Signal Store for shared or complex global state.
- **Zoneless**: Explicitly enable zoneless change detection (Angular 21 default). `Zone.js` should not be used.
- **Components**: 100% Standalone Components. No `NgModules`.

## Templates & Control Flow

- **Modern Syntax**: Use `@if`, `@for`, `@switch`, and `@defer` syntax only.
- **Deprecated Directives**: Avoid `*ngIf`, `*ngFor`, etc.

## Performance

- **Hydration**: Enable SSR & Universal Hydration for production applications.
- **Deferred Loading**: Utilize `@defer` blocks for non-critical UI components.

## Quality

- **JSDoc**: Comprehensive comments for all public members to support Compodoc generation.
- **Signals**: Always prefer Signals over `BehaviorSubject` for template-bound data.
