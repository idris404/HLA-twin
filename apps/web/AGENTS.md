# Web application rules

These rules apply under `apps/web/` in addition to the repository guide.

## Responsibility

The web app presents synthetic data and typed backend results. It does not own
ABO, HLA, DSA, virtual-crossmatch, confidence, ranking, or alert logic.

## Implementation

- Use Next.js App Router and TypeScript with strict type checking.
- Prefer Server Components by default; use Client Components only for genuine
  interaction such as the simulator.
- Consume generated contract types. Do not hand-copy backend response types.
- Keep server-state fetching separate from local UI state.
- Build reusable domain components, not a single page with embedded logic.
- Use design tokens and existing components before adding one-off styles.
- Add a dependency only when a simple platform or existing solution is worse.

## Required product states

Every data surface must handle loading, empty, incomplete, error, and ready
states. Clearly label synthetic data, simulated calculations, draft rules, and
human-validation requirements.

The demo must remain understandable at common laptop projection sizes and usable
at 360 px. Controls need keyboard access, visible focus, accessible names, and
WCAG AA contrast. Respect reduced-motion preferences.

## Testing

- Unit-test pure presentation helpers.
- Component-test important conditional states.
- Maintain one Playwright path covering recipient selection, three-donor
  comparison, live simulation, human validation, and post-transplant alert.
- Do not approve visual or medical copy changes solely from snapshots.

