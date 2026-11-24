import { mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const candidates = [
  join(botDir, "entry.txt"),
  join(dirname(fileURLToPath(import.meta.url)), "entry.txt"),
];

const entryPath = candidates.find((p) => existsSync(p));
if (!entryPath) {
  throw new Error("entry.txt not found in bot dir or next to main.ts");
}

const line = readFileSync(entryPath, "utf8").replace(/\r?\n$/, "").trim();

if (line.length < 1 || line.length > 140) {
  throw new Error(`fortune must be 1-140 characters, got ${line.length}`);
}

// The gate allows 1-140 characters of UTF-8 text. Write exactly the line
// and nothing else: no trailing newline, no extra whitespace, so the
// output file is byte-identical to the fortune itself.
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
