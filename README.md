# Docs@Nite

Dark mode for Google Docs. One switch: click the extension icon to turn it on or off (a small "OFF" badge shows when it's off). On by default.

## Install

1. Open `chrome://extensions`
2. Turn on **Developer mode** (top right)
3. Click **Load unpacked** and select this folder

## How it works

Google Docs draws the document into `<canvas>` tiles, so CSS can't restyle the text directly. Docs@Nite inverts the whole page (`invert + hue-rotate`), which turns the document, menus, dialogs, and sidebars dark in one move, then flips photos, avatars, and video back to their real colors. Images embedded inside the document live in the canvas and stay inverted — a limitation shared by every Docs dark-mode extension.
