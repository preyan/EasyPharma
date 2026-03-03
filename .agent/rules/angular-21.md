# Angular 21 LTS Rules
- **Reactivity**: Use Signals for local state; NgRx Signal Store for global/shared state.
- **Zoneless**: All components must be zoneless (Angular 21 default).
- **Control Flow**: Use @if, @for, and @defer syntax only. No *ngIf or *ngFor.
- **Components**: 100% Standalone Components. No NgModules.
- **Documentation**: Use JSDoc comments for Compodoc auto-generation.
