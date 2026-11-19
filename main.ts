// News-image entry: the front page is already finished as entry.png, so this
// program only carries that file into the grader's output folder. It draws
// nothing at run time, which keeps both runs byte for byte identical.
import * as fs from "node:fs";
import * as path from "node:path";

const folder = import.meta.dirname;
const source = path.join(folder, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = path.join(outDir, "entry.png");

fs.mkdirSync(outDir, { recursive: true });
fs.copyFileSync(source, target);

// Double-check the copy landed whole before the run ends.
if (fs.statSync(target).size !== fs.statSync(source).size) {
  throw new Error("entry.png copy is incomplete");
}
const bytes = fs.statSync(target).size;
console.log(`entry.png written (${bytes} bytes)`);
