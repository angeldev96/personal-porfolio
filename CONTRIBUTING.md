# Contributing to this Portfolio

Thanks for taking an interest in improving this repo. This project represents a production-ready personal portfolio — changes should be intentional and reviewed.

Before you open a PR
- Fork the repo and work on a feature branch (use clear branch names: `fix/cert-spacing`, `feat/add-logo`).
- Update `src/data/resume-data.tsx` for content changes (projects, certificates, work history). Keep copy concise and consistent across languages.
- Update `src/i18n/dictionary.ts` for label/translation updates.
- Add or update images under `public/` or `src/images/logos/`.

Code style and checks
- Use TypeScript and follow existing code patterns.
- Run the dev server locally: `npm install && npm run dev`.
- Ensure `npm run build` completes without type or lint errors before creating a PR.

Commit messages
- Keep commits small and focused.
- Use present-tense messages and include scope: `ui: improve spacing on certificates` or `data: add new project entry`.

Pull request
- Open a PR against `main` with a concise description of what changed and why.
- Include screenshots for visual changes when applicable.
- The PR should pass CI (build + lint) before merging.

What to avoid
- Don't change layout-wide styles unless necessary; prefer component-scoped changes.
- Avoid committing large binary assets without prior agreement.

Maintainers can:
- Merge after review and successful CI checks.
- Request changes if tests or visual regressions occur.

Thanks — your PR helps keep this portfolio accurate and useful for employers.
