# Contributing to A2A-SIN-PlayStation

## Scope first

Before changing code or docs, verify the change genuinely belongs to the **PlayStation** surface.

Put the change here when it affects:
- PlayStation Network messaging routing, coordination, or automation workflows
- PlayStation evidence, recovery, auth, or session handling
- PlayStation contracts tied to console-platform automation

Do **not** put the change here when it belongs to:
- unrelated gaming or social platform logic
- organization SSOT docs or architecture ownership
- unrelated OpenSIN services

## Workflow

1. Branch from the latest `main`.
2. Make the smallest repo-scoped change possible.
3. Run validation command(s) relevant to the touched surface.
4. Include exact validation commands and evidence in the PR.

## Boundary checklist

- Does this change stay within PlayStation ownership?
- Does another repo already own the adjacent platform behavior?
- Does this PR avoid redefining shared docs, runtime, or platform canon?

## License

By contributing, you agree that your contributions will be licensed under the Apache License 2.0.
