# Chat UI (Assignment-3)

Minimal React + Vite app that implements a WhatsApp-like multi-conversation chat UI stored in localStorage.

How to run

1. Install dependencies

```bash
npm install
```

2. Start dev server

```bash
npm run dev
```

The app will open at http://localhost:5173

What changed

- Added a small React app under `src/` with `Sidebar` and `ChatWindow` components.
- Conversations persist in `localStorage`.

Next improvements

- Add deletion and renaming of conversations
- Add timestamps and read receipts
- Replace localStorage with backend API for multi-device sync

# Assignment 3 — Chat UI (WhatsApp-like)

Project overview
----------------
This repository contains a minimal single-page application that demonstrates a WhatsApp-style chat interface with multiple conversations. Built with React and Vite, the project emphasizes clear component boundaries, straightforward state management, and a simple local persistence layer for rapid prototyping.

Core features
- Conversation list (sidebar) with the ability to create new conversations
- Conversation view that displays messages and includes an input for sending messages
- Local persistence using `localStorage` so messages persist across page reloads
- Python simulation scripts in `tools/` for validating business logic when the front-end runtime is unavailable

Prerequisites
- Node.js (v16+) and npm — required to run the front-end dev server
- Python 3.x — optional, to run simulation scripts under `tools/`

Getting started (development)
-----------------------------
1. Install dependencies:

```bash
cd /path/to/Assignment-3
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the URL shown by Vite (default: http://localhost:5173) in your browser.

Repository layout
-----------------
- `index.html` — Vite entry file
- `package.json` — project metadata and scripts
- `src/` — React source code
	- `main.jsx` — application bootstrap
	- `App.jsx` — root component and state management
	- `components/Sidebar.jsx` — conversation list
	- `components/ChatWindow.jsx` — message list and composer
	- `utils/storage.js` — localStorage helpers
	- `styles.css` — base styles
- `tools/` — Python scripts for logic validation
	- `test_conversations.py` — small demonstration script
	- `simulate_ui_actions.py` — simulation of create/rename/send/delete flow

Usage guide — manual testing
---------------------------
- Create a conversation: enter a name in the sidebar input and click `+`.
- Select a conversation: click a conversation entry in the sidebar to view its messages.
- Send a message: type in the message box and press Enter or click `Send`.
- Persistence: reload the page to verify that conversations and messages persist via `localStorage`.

Running the simulation scripts (optional)
---------------------------------------
If you cannot run the front-end or prefer script-based validation, run the Python scripts:

```bash
python3 tools/test_conversations.py
python3 tools/simulate_ui_actions.py
```

These scripts operate on an in-memory conversation structure and print state changes, which is useful for validating the business logic.

Next steps and recommendations
------------------------------
- Add rename and delete controls in the UI (currently simulated in `simulate_ui_actions.py`).
- Add timestamps and richer message metadata (IDs, delivery/read status).
- Replace `localStorage` with a backend API for multi-device sync (Express/FastAPI or similar).
- Add automated tests (unit + E2E) and integrate CI.
- Consider converting the codebase to TypeScript for stronger typing and safer refactors.

Support
-------
If you run into issues starting the dev server, copy the terminal output here and I will help troubleshoot.

License
-------
MIT (adjust as needed)
