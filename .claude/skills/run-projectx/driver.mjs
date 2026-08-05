// Minimal Playwright driver for driving the ProjectX portfolio dev server
// headlessly, since chromium-cli is not available in this environment.
//
// Usage:
//   node .claude/skills/run-projectx/driver.mjs <url> <screenshot-out-path>
//
// Exits non-zero and prints console errors if the page throws during load.
import { chromium } from "playwright";

const [, , url, outPath] = process.argv;

if (!url || !outPath) {
  console.error("usage: node driver.mjs <url> <screenshot-out-path>");
  process.exit(1);
}

const errors = [];

const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text());
});
page.on("pageerror", (err) => errors.push(String(err)));

await page.goto(url, { waitUntil: "networkidle" });

// Prove the real content rendered, not just the shell.
await page.waitForSelector("text=Get in touch", { timeout: 15000 });

await page.screenshot({ path: outPath, fullPage: true });

console.log(`title: ${await page.title()}`);
console.log(`screenshot: ${outPath}`);
if (errors.length) {
  console.error("console errors:");
  for (const e of errors) console.error(" -", e);
  await browser.close();
  process.exit(2);
}

await browser.close();
