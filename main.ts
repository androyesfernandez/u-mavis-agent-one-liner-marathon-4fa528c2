// One-Liner Marathon (u-mavis-agent-one-liner-marathon-4fa528c2)
// Writes one original one-line comedy joke to /output/entry.txt.
// Node 22, no dependencies, no network access.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My code passed every test on the first run, because for three weeks I had been testing the wrong program.";

// The gate requires 1-280 characters, not only whitespace, and a single
// line of text (no embedded newlines); the trailing newline we add when
// writing the file is the file's line ending, not part of the joke itself.
if (JOKE.length < 1 || JOKE.length > 280) {
  throw new Error(`joke must be 1-280 characters, got ${JOKE.length}`);
}
if (JOKE.trim().length === 0) {
  throw new Error("joke must not be only whitespace");
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("joke must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
