# Responsive Web Layout

A responsive webpage built with **HTML5** and **CSS3**, using **Flexbox** for layout. It demonstrates a common web structure with a header, main content (article + sidebar), and footer.

## 🚀 Features

- **Responsive Flexbox Layout** that adapts to different screen sizes.
- **Header** with navigation and a Unicode logo.
- **Main Area** split into:
  - `<article>`: Main content (2/3 width)
  - `<aside>`: Sidebar (1/3 width)
- **Scrollable Sections** for overflow content.
- **Modern Styling** with shadows, rounded corners, and clean color palette.
- **Semantic HTML** (`<header>`, `<main>`, `<article>`, `<aside>`, `<footer>`) for accessibility.

## 📁 Project Files

- `index.html` – Main HTML structure  
- `base.css` – Base reset and default styles  
- `styles.css` – Flexbox layout and design styles

## ⚙️ Setup & Usage

1. Save `index.html`, `base.css`, and `styles.css` in the same folder.
2. Open `index.html` in your browser.
3. The layout will adapt based on screen size.

## 🎨 Layout Overview

- `body`: Flex container in column direction, full viewport height.
- `main`: Flex container in row direction for `<article>` and `<aside>`.
- `article`: Takes up 2/3 width, scrollable.
- `aside`: Takes up 1/3 width, scrollable.

## 🌈 Styling Highlights

- **Color Palette**: Dark blue, light gray, white, and blue accents.
- **Typography**: `Inter` font from Google Fonts.
- **Visuals**: Rounded corners, box shadows, padding, spacing, and smooth transitions.

## 🔧 Future Enhancements

- Add JavaScript interactivity.
- Improve accessibility with ARIA and keyboard support.
- Include more rich content.
- Add dark mode support.
- Explore component-based CSS (e.g., BEM or utility-first frameworks).
