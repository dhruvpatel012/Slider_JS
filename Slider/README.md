# Image Slider — Vanilla JS

A simple image slider made with plain HTML, CSS & JavaScript. No libraries.

## Files

- `index.html` → structure
- `style.css` → design + animation
- `script.js` → logic

## How It Works (short version)

1. All slide info (image, title, description) is stored in one array: `slidesData`.
2. `script.js` loops through that array and **builds the slides + dots automatically** using `forEach()`.
3. `currentIndex` is just a number — it remembers which slide is active.
4. `updateSlider()` uses that number to:
   - move the slides using `transform: translateX()`
   - highlight the active dot
   - update the "1 / 5" counter
5. CSS `transition: 0.5s` makes the movement smooth (that's the whole animation).
6. Buttons / dots / arrow keys just change `currentIndex` and call `updateSlider()`.
7. The `%` operator makes it loop back to slide 1 after the last slide (and vice versa).

## Features

- Next / Prev buttons
- Dot indicators
- Slide counter
- Keyboard arrows (← →)
- Autoplay (pauses on hover)
- Fully responsive

## JS Concepts Used

Object array • `forEach()` • template literals • `querySelector()` • `addEventListener()` • `classList` • `%` (modulo)

