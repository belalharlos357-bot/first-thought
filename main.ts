// first-thought entry: print the one-word entry from entry.txt
// The entry is a single word; trailing whitespace is trimmed before printing.
// Output goes to stdout with a trailing newline, exactly one word.
import { readFile } from "node:fs/promises";

// Resolve the entry file relative to this module, then read and print it.
const entryUrl = new URL("./entry.txt", import.meta.url);
const raw = await readFile(entryUrl, "utf8");
const word = raw.trim();
console.log(word);
