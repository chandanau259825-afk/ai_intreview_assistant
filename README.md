# AI-Powered Interview Assistant

This skeleton implements core features for the Swipe internship assignment.

## How to run
1. npm install
2. npm run dev

## Notes
- The project uses a mock AI module located at `src/api/mockAi.js`. Replace with OpenAI or other LLM API in `src/utils/ai.js`.
- Resume parsing is naive; improve using better heuristics or dedicated parsers.
- Persistence implemented with redux-persist (localStorage).
