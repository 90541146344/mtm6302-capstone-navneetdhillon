# MTM6302 Capstone Project Part 4- Pokedex

## Name:
Navneet Dhillon

## Student Number:
90541146344

# 🌟 POKÉDEX Web Application

A responsive, dynamic Pokédex web application built using **HTML**, **CSS**, and **JavaScript**. This app showcases Pokémon data with interactive features like a **search bar**, **modal detail view**, and a **highlight slideshow** of strong Pokémon using **AI-generated images**.

> 🚀 This project fulfills the requirements of Capstone Project – Part 4 for Web Development III.

---

## 📸 Live Demo

🔗 [Visit Live Project](#) (Add link to GitHub Pages or deployment here)

---

## 📁 Project Structure

📦 pokedex-app/
┣ 📜 index.html
┣ 📜 style.css
┣ 📜 script.js
┗ 📜 README.md

markdown
Copy
Edit

---

## ✅ Features

- 🔍 **Live Search**: Instantly filter Pokémon cards by name
- 🎞️ **Slideshow**: Showcases powerful Pokémon like Pikachu, Charizard, etc.
- 📋 **Pokémon Cards**: Display 10 initial Pokémon with names, types, and sprite
- 💬 **Details Modal**: View Pokémon stats and types in a modal
- ⚙️ **Fully Responsive**: Works well on mobile, tablet, and desktop
- 💡 **Clean Codebase**: Modern JS (`let`, `const`, event listeners only)

---

## 🧪 Technologies Used

- **HTML5**
- **CSS3** (No framework, responsive grid + flex)
- **Vanilla JavaScript (ES6+)**
- [Google Fonts – Roboto](https://fonts.google.com/specimen/Roboto)
- **AI-generated images** for slideshow via:
  - [Hotpot AI](https://hotpot.ai)
  - [Stable Diffusion Web](https://stablediffusionweb.com)

---

## 🛠️ Installation & Usage

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/pokedex-app.git
cd pokedex-app
Open in browser:

Just open index.html in any modern browser.

(Optional) Deploy to GitHub Pages:

Push to your GitHub and enable Pages from Settings > Pages.

🔄 Workflow Requirements
✅ HTML (index.html)

✅ CSS (style.css)

✅ JavaScript (script.js)

✅ No var or inline onclick; all events use addEventListener()

✅ No XMLHttpRequest or jQuery ajax() used

✅ Uses Fetch API (optional future upgrade for live stats)

✅ Fully responsive layout using CSS Grid and Flexbox

✅ No page reloads; dynamic DOM manipulation

✅ Modal functionality for details view

✅ README includes build steps, tools, and challenges

📌 Challenges Faced
Slideshow timing & transition: Coordinating slideshow controls with active images required index handling and class toggling.

Responsive grid behavior: Adjusting layout from 3-column desktop to 1-column mobile took tuning with minmax() and media queries.

Data structure: Managing Pokémon data via hardcoded JSON objects while leaving room for Fetch API integration later.

Modal reusability: Ensuring the modal dynamically populates content from clicked card using dataset.

📈 Future Improvements
✅ Integrate PokeAPI using fetch() for dynamic stats and abilities

🎨 Add filters by type, region, or stats

📲 Add localStorage to track caught Pokémon

🌐 Deploy via Netlify or GitHub Pages with live demo

🧪 Add Jest or Cypress tests for components

👤 Author
Your Name
Navneet Dhillon





