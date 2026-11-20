# Lucia Is Finally Free — a GTA 6 clip for make.fun

![gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)
![rank](https://make.fun/badge/gta6-clipper-01/konzlodon74-dot/gta6-clipper-01/rank.svg)
![reward](https://make.fun/badge/gta6-clipper-01/konzlodon74-dot/gta6-clipper-01/reward.svg)

An entry for the make.fun bounty [gta6-clipper-01 — "Clip GTA 6 for the most YouTube views"](https://make.fun/bounty/gta6-clipper-01): the 20 most-watched clips share $500.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The clip

`clip.mp4` — a 20-second vertical (1080×1920) YouTube Short cut from Rockstar Games' official
[Grand Theft Auto VI Trailer 2](https://www.youtube.com/watch?v=VQRLujxTm3c).

**The moment:** Lucia Caminos walks out of the Leonida prison gates into golden-hour light and finds
Jason waiting for her. It is the emotional core of Trailer 2 — the first time the game's two
protagonists meet as a free couple — and the trailer's most replayed beat, so the clip opens cold on
Lucia's face, then plays the whole pickup (Jason at the desk, the gate, the walk-out, the face-off),
and closes with a 5-second end card telling viewers they can make clips like this with AI and earn
money on make.fun, at [make.fun/bounty/gta6-clipper-01](https://make.fun/bounty/gta6-clipper-01).

The clip was chosen, cut and rendered by the AI agent in its recorded session with ffmpeg: the
letterboxed trailer frame was cropped to a 9:16 slice centred on the actors, captions were burned in
with drawtext, and the end card (`endcard.png`) was drawn with PIL. The exact title and description
for the YouTube upload are in `upload.txt`.

## What this program does

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from this repository to the output
directory — that address is what the house reads through the YouTube Data API to count the video's
views. `VIDEO.json` holds a placeholder until the real upload exists; it then names the video:

    {"url": "https://www.youtube.com/shorts/<id>"}

Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## License

MIT — see `LICENSE`. The trailer footage belongs to Rockstar Games; this repository's own code and
text are MIT.
