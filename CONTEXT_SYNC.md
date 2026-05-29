# Context Sync — Memory Backend

This repository uses **[Context Sync](https://github.com/Intina47/context-sync)**
(`@context-sync/server`) as its local-first persistent-memory backend for AI
coding assistants (Claude Code, Cursor, Zed, Continue — any MCP client).

Context Sync stores project identity, decisions, constraints, and caveats in a
local SQLite store keyed by project path, so an agent resumes where the last
session ended instead of re-deriving context every time.

## Registered server

The MCP server is registered in [`.mcp.json`](./.mcp.json):

```json
"context-sync": { "command": "npx", "args": ["-y", "@context-sync/server"], "type": "stdio" }
```

`npx -y` fetches and runs the server on first use — no manual global install
required. All repos in this fleet share one local store keyed by path; set
`CONTEXT_SYNC_DB_PATH` to pin a custom location if needed.

## Tools

`set_project` · `remember` · `recall` · `read_file` · `search` · `structure` · `git` · `notion` (read-only)

## First-session bootstrap

In a fresh environment, call `set_project({ path: "<absolute path to this repo>" })`
(this also installs git context-capture hooks), then seed the identity below with
`remember` so it persists across sessions.

## Seed identity

- **Project:** Claude.md (`bkal169/Claude.md`)
- **What it is:** Central hub for Claude Code skills, configs, and roadmaps (awesome-claude-code, obsidian-skills, superpowers, ui-ux-pro-max, k8s roadmap).
- **Stack:** Shell/config + Claude Code skill packs; no app runtime.
- **Notes:** Skills/config source-of-truth repo; canon for how agents are configured across the fleet.
