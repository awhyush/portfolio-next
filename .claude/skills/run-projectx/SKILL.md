---
name: run-projectx
description: Build, run, and drive the ProjectX portfolio site (Next.js). Use when asked to start ProjectX, run its dev server, build it, lint it, take a screenshot of the portfolio UI, or verify a UI change actually renders.
---

ProjectX is a single-page personal portfolio built with Next.js (App
Router, TypeScript, Tailwind CSS v4). It has no backend/database — all
content is mock data in `lib/data.ts`. Since it's a browser-driven app,
drive it by starting the dev server and pointing a headless-Chromium
script at it. `chromium-cli` is not installed in this environment, so
this skill ships its own minimal Playwright driver at
`.claude/skills/run-projectx/driver.mjs` — use that instead.

All paths below are relative to `D:\study\ProjectX\` (repo root == unit root).

## Prerequisites

Node.js and npm (verified with Node v24.11.0 / npm 11.6.1 on Windows,
Git Bash shell). No OS packages beyond that — this is a pure Next.js
app, no native deps.

## Setup

```bash
npm install
```

The driver needs Playwright's Chromium binary (not otherwise a project
dependency — installed once for driving, not for the app itself):

```bash
npm install -D playwright
npx playwright install chromium --with-deps
```

## Build

```bash
npx next build
```

Verified: compiles clean, TypeScript passes, both routes (`/` and
`/_not-found`) prerender as static content.

## Lint

```bash
npx eslint .
```

Verified: exits 0, no warnings on current codebase.

## Run (agent path)

Start the dev server in the background on a fixed port, wait for it to
answer, then drive it with the bundled Playwright script:

```bash
(nohup npx next dev -p 3311 > /tmp/nextdev.log 2>&1 &)
timeout 30 bash -c 'until curl -sf http://localhost:3311 >/dev/null; do sleep 1; done'
node .claude/skills/run-projectx/driver.mjs http://localhost:3311 /tmp/screenshots/home.png
```

`driver.mjs <url> <screenshot-out-path>`:
- Launches headless Chromium (`--no-sandbox`), navigates to `<url>`,
  waits for real content (`text=Get in touch` in the Contact section —
  proof the page isn't just the Next.js shell).
- Writes a full-page screenshot to `<screenshot-out-path>`.
- Prints the page `<title>` and the screenshot path to stdout.
- If the page threw a console error or `pageerror`, prints them to
  stderr and exits with code 2 — treat that as a failed run even if a
  screenshot was produced.

Stop the server when done (Windows/Git Bash — no `lsof` here):

```bash
pid=$(netstat -ano | grep ':3311' | grep LISTENING | head -1 | awk '{print $NF}')
taskkill //PID "$pid" //F
```

## Run (human path)

```bash
npm run dev   # → same "next dev" command without -p, defaults to http://localhost:3000
```

Opens nothing by itself (headless container) — a human opens
`http://localhost:3000` in a browser. Ctrl-C to stop.

## Test

No test suite configured yet (`create-next-app` default — only
`dev`/`build`/`start`/`lint` scripts exist in `package.json`).

---

## Gotchas

- **`create-next-app .` in this directory fails.** npm refuses a
  package name with capital letters, and the folder is `ProjectX`. Fix
  used here: scaffold into a sibling temp directory, then move the
  files up and rename `"name"` in `package.json` by hand (it's
  `projectx-portfolio`, not `ProjectX`).
- **`chromium-cli` is not installed in this environment** — the usual
  first choice for driving a web app per this skill's own generator
  guidance. Fell back to a hand-rolled Playwright script
  (`driver.mjs`) per the documented fallback path. If `chromium-cli`
  becomes available later, prefer it and retire the driver.
- **Windows has no `lsof`.** Freeing the dev server's port uses
  `netstat -ano | grep LISTENING` + `taskkill //PID <pid> //F` instead
  of the `lsof -ti:<port> | xargs kill` pattern that works on Linux
  containers.
- **First `nav` after a cold dev server is slow** (Turbopack compiles
  the route on first request) — the driver's `waitForSelector` with a
  15s timeout absorbs this; a fixed `sleep` would be flaky.

## Troubleshooting

- **`npx create-next-app@latest .` errors with "name can no longer
  contain capital letters"**: the target directory name becomes the
  npm package name and `ProjectX` has capitals. Scaffold elsewhere and
  move the files in (see Gotchas), or rename `package.json`'s `name`
  field after the fact.
- **`chromium-cli: command not found`**: not installed here. Use
  `driver.mjs` instead (see Run (agent path)).
