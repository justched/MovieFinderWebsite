# 🎬 Movie Finder

A clean and easy-to-use web app that lets users search for **movies and TV shows** using real-time data from the **TVMaze API**. Built with **HTML**, **CSS**, and **JavaScript**.

---

## ✨ Features

* 🔍 Search for any **movie or TV series**
* 🖼️ Shows **poster, title, rating**, and summary snippet
* 📱 Fully **responsive design**
* 🎨 Modern UI inspired by streaming platforms
* 🧩 Fallback image when no poster exists
* ⚡ Instant, client-side performance

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* TVMaze API

---

## 📁 Project Structure

```
MovieFinder/
│── index.html
│── style.css
│── script.js
│── icons/
│   └── camera_icon.png
```

---

## 📦 Installation

### Option 1 — Download ZIP

1. Download the project
2. Extract it anywhere on your computer

### Option 2 — Clone with Git

```
git clone https://github.com/yourusername/MovieFinder.git
```

---

## ▶️ How to Launch

1. Open the project folder
2. Double-click **index.html**
3. It opens in your browser
4. Start searching!

No server needed.

---

## 🔧 How It Works

1. User enters a movie or show title
2. `searchShows()` sends a request to TVMaze API
3. API returns data (title, poster, rating, summary, etc.)
4. JavaScript creates cards and renders them in a grid
5. Missing poster? → fallback image is used

---

## 📡 API Used

TVMaze Search API:

```
https://api.tvmaze.com/search/shows?q={query}
```

Returns:

* Title
* Poster
* Rating

---

## 📄 License

MIT License.
