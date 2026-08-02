# Orbit documentation app

This folder contains the full-page component and block catalog used to develop and verify Orbit UI.

## Structure

- `unified.tokens.css` defines the semantic dark and light themes.
- `unified.css` contains documentation, block, and responsive layouts.
- `components/UnifiedPrimitives.tsx` is a compatibility bridge to the public components in `src/lib/`.
- `blocks/` contains composed overview, chat, data-list, team, and library demonstrations.
- `docs/` contains navigation metadata, preview/code cards, and `/components/:slug` plus `/blocks/:slug` pages.
- `docs/WorkOsBlocksGallery.tsx` preserves the editorial and conversational patterns absorbed into Orbit.
- `docs/AdvancedComponentExamples.tsx` contains the interactive component demonstrations.
- `UnifiedSession.tsx` owns documentation routing, search, preview layout, and theme state.

Product blocks own only their local interaction state. Package components are imported directly from their source modules inside the repository; `src/lib/index.ts` exists only as the consumer-facing package entry point.
