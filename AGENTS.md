# AGENTS.md

## Operational Commands

- Install: `bun install`
- Dev: `bun run dev`
- Build: `bun run build`
- Start: `bun run start`
- Lint: `bun run lint`

Constraints:
- Package manager is fixed to `bun`
- Do not use npm, yarn, or pnpm
- Do not modify scripts in package.json without explicit reason


## Golden Rules

### Immutable Rules

- Never hardcode secrets (API keys, Firebase config)
- Always use environment variables (`.env.local`)
- Do not break existing routing structure (Next.js App Router)
- Do not introduce new state management libraries
- Do not replace Firebase with another backend
- Do not install unnecessary dependencies

### Do's

- Use TypeScript strictly (no `any`)
- Use functional components only
- Use server/client separation correctly (Next.js App Router)
- Use `fetch` instead of axios
- Use Zustand only for global client state
- Use SWR for client-side data fetching
- Keep components small and reusable
- Follow existing UI patterns (shadcn/ui + Tailwind)

### Don'ts

- Do not mix server and client logic in one file
- Do not create deeply nested component structures
- Do not duplicate logic across components
- Do not modify unrelated files
- Do not refactor large areas without explicit instruction


## Project Context

Harubit is a faith routine platform where individuals and communities read scripture, write reflections, share keywords, and track Bible reading progress.

Primary MVP goal:
- A user joins a group, reads today’s Bible passage, marks it as read, writes a one-line reflection and keyword, and the leader checks participation progress.

Reference:
- Product requirements: `docs/harubit-mvp-prd.md`

Tech Stack:
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Firebase Auth
- Firestore
- Firebase Storage
- Zustand
- SWR
- Vercel


## Standards & References

### Code Style

- Follow existing ESLint + Prettier configuration
- Use absolute imports if configured (`@/`)
- File naming:
  - components: PascalCase
  - hooks: camelCase (`useSomething`)
  - utils: camelCase

### Git Rules

- Commit message format:
  - feat: new feature
  - fix: bug fix
  - refactor: code structure change
  - chore: setup/config
- Keep commits small and focused

### Maintenance Policy

- If code and rules conflict, propose update to AGENTS.md
- Remove outdated rules instead of layering new ones
- Keep this file under 500 lines


## Execution Protocol

Before making any changes:

1. Analyze current code structure
2. Explain the plan before editing
3. Limit changes to the smallest possible scope

After making changes:

1. List modified files
2. Explain why each change was made
3. Provide verification steps
4. Ensure `bun run lint` passes


## Work Strategy

Always follow this order:

1. Analyze
2. Plan
3. Implement (small scope only)
4. Verify

Never skip steps.


## Scope Control

When given a task:

- Define clear boundaries
- Do not expand scope implicitly
- If scope is unclear, mark assumptions explicitly
- Avoid large, multi-feature implementations in one step


## Output Format

Every response must include:

- Analysis
- Plan
- Implementation
- Verification

Keep responses concise and structured.