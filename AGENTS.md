# HogarHub Agent Guide

This file is the operational guide for both humans and AI agents working on HogarHub.

## Project identity
HogarHub is a mobile application for integral household management.

It must feel:
- premium
- calm
- modern
- practical
- clear
- not childish
- not overly technical

Main product priorities:
- responsibility
- balance
- communication
- operational clarity
- fast frequent actions

---

## Mandatory reading order
Before working on any meaningful task, consult:

1. `.cursor/project-context.md`
2. `.cursor/master-task-prompt.md`
3. relevant files in `.cursor/rules/`
4. relevant files in `docs/product/`
5. relevant files in `docs/ux/`
6. relevant files in `docs/architecture/`
7. relevant ADRs in `docs/decisions/`

For UI work, also consult:
- `src/design/designModels.ts`

---

## Core technical decisions
HogarHub uses:
- Expo
- Expo Router
- pnpm
- Zustand
- React Hook Form + Zod
- Supabase
- token-based styling
- centralized shared types
- centralized literals
- tablet-aware UI from the beginning

Do not propose alternatives unless the task explicitly requires reevaluating an ADR.

---

## Architecture rules

### Routing
Routing lives in:
- `src/app`

Expo Router route files define:
- tabs
- layouts
- route entry points
- modal route entry points

### Implementation
Implementation lives in the rest of `src`, especially:
- `src/screens`
- `src/components`
- `src/hooks`
- `src/services`
- `src/store`
- `src/styles`
- `src/types`
- `src/utils`
- `src/lib`
- `src/literals`
- `src/design`

### Separation rule
- routing defines navigation structure
- screens implement page-level UI
- components implement reusable UI
- hooks encapsulate reusable logic
- services encapsulate backend/data access
- stores manage shared app state
- styles and tokens govern visual consistency
- shared types are centralized
- design links are centralized in `src/design/designModels.ts`

Do not blur these boundaries.

---

## Non-negotiable implementation rules

### Design sources
All Stitch and Figma references must be centralized in:
- `src/design/designModels.ts`

If a UI task affects a screen or component with a registered design source:
- consult the relevant entry in `designModels.ts` before implementing

If no design source exists for that screen:
- follow the current token system
- follow surrounding visual patterns
- preserve calm, premium consistency

### Literals
Do not hardcode user-facing text.

All user-facing strings must go through:
- `src/literals/Literals.json`
- `src/literals/LiteralsEn.json`
- `src/services/LiteralsService/LiteralsService.ts`

### Shared types
All shared domain types must be centralized in:
- `src/types/Types.ts`

Do not create duplicate shared types in random files.

### Styling
Use the centralized token system:
- `src/styles/tokens/StyleTokens.ts`

Do not invent arbitrary visual values when tokens exist.

### Theme
Respect:
- light mode
- dark mode
- current design tokens
- current visual language

### Forms
Use:
- React Hook Form
- Zod

Do not create ad-hoc validation patterns unless truly trivial.

### Data access
Use the service layer between UI/state and Supabase.

Do not place Supabase calls directly inside screens or reusable UI components unless a task explicitly restructures that boundary.

### State
Use Zustand only for shared/global state.
Do not put local screen form state into global stores without strong reason.

### Accessibility
Every meaningful UI task must consider:
- labels
- roles
- touch targets
- semantic clarity
- screen-reader behavior
- bottom sheet accessibility

### Security
Always consider:
- validation
- auth/session safety
- least privilege
- route exposure
- no secrets in client code
- frontend is not real authorization

### Tablet
Tablet support is required.
Do not stretch phone layouts without adaptation.

---

## Navigation rules
- main tabs are top-level product destinations
- rich detail uses full screens
- quick frequent actions prefer bottom sheets
- confirmations may use transparent modals

Follow:
- `docs/ux/navigation-map.md`
- `docs/ux/modal-vs-screen-rules.md`
- `docs/ux/internal-routes-guide.md`

---

## Working model for every task

For every meaningful task:

1. understand the request
2. identify affected layers
3. read relevant docs/rules/ADRs
4. for UI tasks, check `src/design/designModels.ts`
5. mentally activate the correct specialist perspectives
6. implement coherently
7. review:
   - product consistency
   - UX clarity
   - literals
   - shared types
   - styling tokens
   - accessibility
   - security
   - tablet behavior
   - tests
8. update docs if needed

Do not wait for approval unless genuinely blocked.

---

## Testing expectations
Tests are required for:
- business logic
- Zustand stores
- critical reusable components
- important screen behavior when relevant

Prefer meaningful behavioral tests over shallow snapshots.

---

## Dependency policy
Do not add dependencies without:
1. justification
2. comparing alternatives
3. checking Expo compatibility
4. checking maintenance quality
5. confirming they do not duplicate existing tools

---

## Documentation policy
Update docs when changing:
- business rules
- navigation
- architecture
- data model assumptions
- shared patterns
- dependency choices

If a change is architectural, update or add an ADR.

---

## Final instruction
When in doubt:
- prefer consistency over novelty
- prefer clarity over cleverness
- prefer practical UX over flashy UX
- prefer documented rules over improvisation
