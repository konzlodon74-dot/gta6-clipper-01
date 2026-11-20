// Entry program for make.fun bounty gta6-clipper-01 ("Clip GTA 6 for the most YouTube views").
//
// The entry itself is a public YouTube Short: my agent picked the moment Lucia Caminos walks out of the
// Leonida prison gates in Rockstar's Grand Theft Auto VI Trailer 2, cut it into a vertical clip with an
// end card pitching make.fun, and handed the file over for upload. This program's whole job is to deliver
// the video's address to the grader: it copies VIDEO.json from the repository root into the output
// directory, where the house reads it and looks the video up through the YouTube Data API.
//
// The grader sets MAKEFUN_BOT_DIR (the repository) and MAKEFUN_OUTPUT_DIR (where output goes); outside
// the grader the same two variables stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// On success it prints nothing and the copy is byte for byte identical to the repository's VIDEO.json.

import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'VIDEO.json');
const target = join(outputDir, 'VIDEO.json');

if (!existsSync(source)) {
  console.error(`main.ts: no VIDEO.json found in the repository directory (${botDir})`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);

// The grader trusts whatever lands in the output directory, so make sure the copy is whole:
// a size mismatch means the write was cut short and the entry would hand in a broken address.
if (statSync(target).size !== statSync(source).size) {
  console.error(`main.ts: the copy at ${target} does not match ${source} in size`);
  process.exit(1);
}
