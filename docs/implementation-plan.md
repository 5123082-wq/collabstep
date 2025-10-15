# Collabverse Frontend Implementation Plan

## Overview
This plan breaks down the build-out of the Collabverse CRM-style frontend into twelve phases, aligning with the staged objectives in the specification. Each phase produces a shippable UI slice with routing, interactive skeletons, and state coverage, progressively layering design language, demo data, and pseudo-logic.

## Immediate Next Steps
1. **Set up the Web App Workspace**
   - Scaffold a Next.js 14 App Router project in `apps/web` with TypeScript, ESLint, Prettier, Tailwind (or chosen styling system), and pnpm scripts wired into Turborepo.
   - Configure base layout files (`app/layout.tsx`, `app/page.tsx`) with global providers for theme toggling and command palette context.

2. **Bootstrap Shared UI Package**
   - Create `packages/ui` to host primitive components (Button, Icon, Surface, Typography) and theme tokens exported as CSS variables.
   - Establish Storybook or dedicated preview route to rapidly iterate on the design system.

3. **Implement Global Layout Shell**
   - Build the persistent header and dual-level sidebar with responsive breakpoints, using mock navigation data derived from the specification.
   - Integrate placeholder actions for search, quick-create menu, notifications, workspace switcher, and user menu (opening stub modals/drawers).

4. **Generate Route Skeletons**
   - Add route groups for every top-level section (Auth, Workspaces, Marketplace, Projects, AI Hub, Finance, Community, Support, Profile, Messaging, Notifications, Admin) with placeholder index pages that render the shared layout.
   - Within the project route, define tab routes/components for each context-specific screen (Overview, Brief, Team & Roles, etc.) with stub content blocks.

5. **Inventory Modals & Drawers**
   - Implement a centralized modal manager (React context + portal) capable of rendering all required dialog shells with mocked forms and CTA handlers.
   - Ensure all primary buttons in the header, navigation, and page headers trigger a visible overlay or toast for now.

6. **Theme & Background Controls**
   - Deliver light/dark theme toggle and background preset selector accessible from header and settings stub, persisting choices with localStorage.

7. **Define Acceptance Checklist for Phase 1**
   - Draft a QA checklist covering navigation, responsive breakpoints, keyboard focus states, command palette shortcuts, and presence of empty/loading/error placeholders across routes.

Completing the tasks above will satisfy the Phase 1 goal of shipping the full application skeleton with navigable pages and interaction scaffolds. Subsequent work can then focus on deepening the design system (Phase 2) and layering mock data/logic (Phase 3 onward).

## Guiding Principles
- **Design Consistency:** Establish a design token system early and apply it across all surfaces, supporting light/dark themes and configurable background presets.
- **Accessibility:** Every interactive element receives keyboard focus styles, aria attributes, and sufficient contrast ratios.
- **Interactivity Without Backend:** Buttons, links, and controls trigger UI responses (modals, drawers, toasts) with mocked data/responses until real APIs arrive.
- **State Coverage:** All forms/tables/cards support loading, empty, error, validation, and success states with placeholder content.
- **Navigation Hierarchy:** Persistent top bar and dual-level side navigation frame the workspace; project-level tabs provide the third navigation tier.
- **Scalable Architecture:** Use a component-driven structure (e.g., Next.js + React + Tailwind/Chakra/Design System) with storybook-like coverage for system components and UI states.

## Phase-by-Phase Breakdown

### Phase 1 — Application Skeleton & Page Inventory
**Goal:** Ship the entire routing map with layout chrome, placeholder content, and modal/drawer scaffolds.

1. **Tech Foundations**
   - Initialize Next.js app in `apps/web` with app router, TypeScript, ESLint, and Tailwind (or alternative CSS-in-JS) configured for theme switching.
   - Configure Turborepo pipeline tasks (`dev`, `build`, `lint`, `test`) and set up shared UI package for primitives.

2. **Global Layout**
   - Implement top navigation bar with search, quick-create menu, notifications, messages, wallet, workspace switcher, and profile menu.
   - Build two-level left sidebar: icon rail (level 1) and contextual menu panel (level 2).
   - Integrate theme toggle (light/dark) and background preset selector (stub) accessible from header and settings.

3. **Routing & Page Shells**
   - Create route structure for all sections: Auth/Onboarding, Workspaces, Marketplace, Projects, AI Hub, Finance, Community, Support, Profile, Messaging, Notifications, Admin.
   - Scaffold project-level tab navigation with placeholders for each tab content area.

4. **Modal & Drawer Inventory**
   - Implement centralized modal/drawer manager to host all required dialogs with placeholder forms.
   - Ensure all primary/secondary buttons trigger corresponding overlays or toasts.

5. **State Placeholders**
   - Provide skeleton loaders, empty states, and mock error banners for each page.

6. **Deliverables**
   - Navigable app with fake data lists/cards/forms.
   - Command palette (⌘K) returning routes/actions.
   - Responsive layout adjustments for ≥1280px desktop, tablet, and simplified mobile navigation.

### Phase 2 — Design System & Component Library
**Goal:** Establish reusable tokens/components and apply them to all Phase 1 surfaces.

1. **Design Tokens**
   - Define color palettes for light/dark, typography scale, spacing, border radii, shadows.
   - Implement token consumption via CSS variables and theme provider.

2. **Component Library**
   - Build shared components: PageHeader, Card, DataTable, Filters, Tabs, Kanban, Gantt placeholder, Drawer, Modal, Stepper, Forms, Toasts, Tooltips, Empty/Error/Success, Loaders, Command Palette, Pagination, Breadcrumbs, RichText, Date/Time pickers, Upload, E-sign mock.
   - Document components in Storybook (optional) or dedicated UI demo routes.

3. **Interaction States**
   - Add hover, focus, active states across all components.
   - Ensure keyboard navigation and aria labelling are implemented.

4. **Theme & Background Settings**
   - Build settings modal/page with theme switch and background preset gallery.
   - Persist user selection locally (context + localStorage).

5. **Deliverables**
   - All Phase 1 pages updated to use the design system components and consistent states.

### Phase 3 — Workspaces & Seats Demo Logic
**Goal:** Populate workspace-related pages with mock data and pseudo-logic.

1. **Data Modeling**
   - Create mock data structures for workspaces, members, roles, invoices, plans, audit logs.
   - Implement state management (Zustand/Redux/Context) for workspace context.

2. **Interactive Flows**
   - Workspaces list with filters/sorting and empty state.
   - Workspace detail dashboard with KPIs, members table, plans, invoices, settings forms, audit timeline.

3. **Modals & Validation**
   - Implement invite, role change, seat purchase/removal, plan change, invoice payment, delete confirmation modals with form validation and optimistic UI updates.

4. **Deliverables**
   - Demo interactions updating mock data in-memory and reflecting UI changes (e.g., seat counts, plan names).

### Phase 4 — Project Sales Pipeline
**Goal:** Build marketplace listing flows for project sales.

1. **Listings Page**
   - Filterable list with cards showing teaser, pricing, quality badges, NDA gates.

2. **Listing Detail**
   - Sections for media gallery, teaser, gated content indicators, price modes (buy now/make offer/auction), due diligence placeholders.

3. **Project Sale Wizard**
   - Multi-step modal/drawer guiding through listing creation from a project context, with validations.

4. **Deal Tracking**
   - Mock escrow checklist UI with status toggles for handover items.

5. **Deliverables**
   - Modal flows for NDA signature, offers, buy now, escrow management.

### Phase 5 — Template Catalog & Clone/Remix
**Goal:** Implement template marketplace workflows.

1. **Catalog & Detail Pages**
   - Filterable/sortable template list with badges for type, author, quality.
   - Detail view with overview, requirements, screenshots gallery, author info.

2. **Template Creation Flow**
   - Draft form for new template submission, with validation and submission states.

3. **Admin Moderation**
   - Queue table with actions (approve/reject/request changes) and quality scoring controls.

4. **Clone Mechanics**
   - Preflight modal verifying requirements, options to clone into workspace or project, preview, and report buttons.

5. **Deliverables**
   - Mocked state updates for clone actions and moderation decisions.

### Phase 6 — Marketplace Talent & Packages
**Goal:** Complete marketplace sections for projects, specialists, contractors, and launch packages.

1. **Vacancy Board**
   - List view, vacancy card, creation form, candidate pipeline with state transitions.

2. **Specialists & Contractors**
   - Directory views with filters, profile cards, invite/interview/scope request flows.
   - Contractor comparison drawer and order modal.

3. **Launch Packages**
   - Package cards with CTA to start a project from template.

4. **Deliverables**
   - Modal interactions wired to mock data (e.g., adding candidates to pipelines).

### Phase 7 — AI Hub & Project AI
**Goal:** Surface AI generation UIs and history management.

1. **Global AI Hub**
   - Generator pages for each artifact (logo, brandbook, landing, etc.) with prompt forms and preview slots.

2. **Session History**
   - List of sessions, comparison mode, statuses (Draft/Accepted).

3. **Project AI Tab**
   - Timeline of AI sessions tied to project, acceptance workflow, review requests.

4. **Deliverables**
   - Modal flows for launching sessions, regenerating, accepting, sending to review.

### Phase 8 — Project Operations
**Goal:** Flesh out project management tooling.

1. **Tasking**
   - Kanban board, sprint backlog, and Gantt visualization with drag-and-drop stubs.
   - Task detail cards with assignments, checklists, linked assets.

2. **Brief & Documentation**
   - Rich text editor with version diff viewer and AI suggestion panels.

3. **Team & Roles**
   - Member table with RACI matrix visualization.

4. **Marketing Tools**
   - Campaign calendars, persona cards, creative gallery placeholders.

5. **Deliverables**
   - Modal flows for task creation, review requests, stage approvals, escalations.

### Phase 9 — Finance & Escrow
**Goal:** Cover global finance management screens.

1. **Wallet & Credits**
   - Balance overview, transaction list, add/withdraw flows.

2. **Escrow Management**
   - List/detail with status badges, unlock/dispute actions.

3. **Subscriptions & Plans**
   - Pricing tables, plan comparison, seat management integration.

4. **Invoices & Disputes**
   - Tables with filters, detail modals, dispute workflows.

5. **Deliverables**
   - Modal coverage for all finance actions (top-up, withdraw, open/dispute escrow, manage subscriptions).

### Phase 10 — Growth Modules
**Goal:** Implement referral and share-to-earn programs.

1. **Share-to-Earn Modal**
   - Program overview, social share buttons, ticket creation, status badges.

2. **Referral Dashboard**
   - Personal link, code, metrics charts, asset downloads.

3. **Deliverables**
   - Empty/error states and success toasts for referral actions.

### Phase 11 — Support, Messaging, Notifications, Community
**Goal:** Build communication and community tooling.

1. **Support Center**
   - Knowledge base search, ticket list/detail with SLA indicators.

2. **Messaging**
   - Conversation list, chat view, group management, video call placeholder, quick actions to convert messages to tasks.

3. **Notifications Center**
   - Filterable notification feed with mark-as-read actions.

4. **Community**
   - Pitches, rooms, events listings with join/RSVP flows.

5. **Deliverables**
   - Modal flows tied to support tickets, community event participation.

### Phase 12 — Admin Console
**Goal:** Provide administrative oversight UI.

1. **Moderation Queues**
   - Tables for profiles, vacancies, templates, listings, complaints with bulk actions.

2. **CMS & Configurations**
   - Forms for static content, commissions, limits, quality score weights.

3. **Reports & Logs**
   - Charts and audit trails with filtering.

4. **Deliverables**
   - Approval/rejection/change request modals, commission editing dialogs, complaint viewer.

## Cross-Phase Considerations
- **State Management:** Favor modular stores per domain with a shared event bus to trigger toasts and global notifications.
- **Testing:** Use Storybook/Playwright snapshots for components and Cypress for critical flows once interactions exist.
- **Performance:** Lazy-load heavy sections (Gantt, Kanban) and modal content as needed.
- **Internationalization:** Prepare i18n scaffolding early to ease localization.
- **Documentation:** Maintain living component documentation and UX guidelines alongside code.

## Acceptance Criteria Checklist
- All declared pages/routes and modals accessible and wired to triggers.
- Consistent design language with responsive breakpoints and theme/background support.
- Tables include filtering, sorting, and pagination on mock data.
- Forms exhibit loading/empty/error/validation/success visuals.
- Command palette navigates to routes and executes quick actions.
- Keyboard accessibility validated for key flows.
- No dead buttons—every CTA produces a visual response.

