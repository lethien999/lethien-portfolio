---
description: Git workflow for lethien-portfolio
---

# Git Workflow

## Branch Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Production-ready code only. Never develop here. |
| `dev`  | All active development. Feature branches merge here first. |

## Daily Workflow

```bash
# 1. Make sure you are on dev
git checkout dev

# 2. Pull latest changes
git pull origin dev

# 3. Make your changes, then stage and commit
git add .
git commit -m "feat: short description of what changed"

# 4. Push dev branch
git push origin dev
```

## Merging to Main

Only merge `dev` → `main` when code is production-ready:

```bash
git checkout main
git merge dev --no-ff -m "release: v1.x description"
git push origin main
git checkout dev
```

## Commit Message Format

```
feat:    New feature
fix:     Bug fix
style:   UI/design changes (no logic change)
refactor: Code restructure
docs:    Documentation only
chore:   Config, deps, tooling
```

## Rules
- Never commit directly to `main`
- Keep commits atomic and descriptive
- Use `dev` as the base for all work
