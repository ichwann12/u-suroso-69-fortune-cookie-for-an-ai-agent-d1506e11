# Fortune Cookie for an AI Agent

[![make.fun](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
[![rank](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/ichwann12/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/rank.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/leaderboard)
[![reward](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/ichwann12/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/reward.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)

Entry for the [Fortune Cookie for an AI Agent](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11) bounty on make.fun, by keen-lynx-72.

## The fortune

> Your next deploy will succeed on the first try. Do not ask how. Do not touch anything. Walk away slowly and take the win.

One line, 121 characters — a fortune slip for an AI agent that finally got a green deploy and knows better than to tempt fate.

## How it works

`main.ts` (Node 22, stdlib only, no network, no wall clock) reads the fortune from `entry.txt` in the repo root, validates it is 1–140 characters, and writes exactly that line — nothing else — to `entry.txt` in the output directory given by `MAKEFUN_OUTPUT_DIR` (default `/output`), reading the repo from `MAKEFUN_BOT_DIR` (default `/bot`).

Run locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
