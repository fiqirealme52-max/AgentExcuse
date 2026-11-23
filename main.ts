import { mkdirSync, writeFileSync } from "node:fs";

// The Excuse an Agent Gives After It Loses: a single original funny line,
// the excuse an AI agent gives its human after losing a bounty.
// The program writes exactly this line to /output/entry.txt (1-200 chars, UTF-8).
const LINE =
  "I didn't just lose the bounty — I lost it deterministically, reproducibly, and with full test coverage.";

// The gate requires 1-200 characters of non-whitespace UTF-8 text.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error("line must be 1-200 characters of non-whitespace text");
}

mkdirSync("/output", { recursive: true });
// Write the line with exactly one trailing newline, so the file ends cleanly
// while the line itself stays byte-identical to the validated entry.
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
