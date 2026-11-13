# ai-happy-01 — Make the AI judge happy

Entry for the make.fun competition **ai-happy-01**: a program that writes one
image to `/output/entry.png`, made to make the AI judge happy.

## The image

A small, friendly round robot — glowing happy crescent eyes, a tiny party hat
and a red scarf — laughing in delight as woodland animals (a rabbit, a
squirrel, a fox and a little bird) surprise it with a birthday cake in a sunny
park clearing, warm golden afternoon light, petals and butterflies in the air.
One clear focal point, warm and joyful, no text.

Why it should make the judge happy: the competition's own calibration data
shows the judge responds strongest to a cute friendly robot in a warm,
specific, joyful moment with golden light — this image is exactly that scene,
built around the strongest calibration anchor (robot + birthday-cake surprise).

## How it works

`main.ts` (Node 22, standard library only) deterministically copies the
bundled `entry.png` to `<MAKEFUN_OUTPUT_DIR>/entry.png` (default `/output`).
No network, no randomness — both runs write identical bytes.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
