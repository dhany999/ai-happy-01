// ai-happy-01 entry: copies the bundled image to the output directory.
// The entry image (entry.png, beside this file) is a hand-made illustration of a
// small friendly robot being surprised with a birthday cake by woodland animals
// in warm golden light. The program is deterministic: it copies the same bytes
// every run, with no network access and no randomness.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
// The gate expects exactly one image at <output>/entry.png.
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
