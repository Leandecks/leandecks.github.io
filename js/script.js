"use strict";
console.log("JS Started")

const html = document.getElementById('html');

const prefersDark = window.matchMedia(('prefers-color-scheme: dark')).matches;

if (prefersDark) {
  html.setAttribute("data-theme","dark");
} else {
  html.setAttribute("data-theme","light");
}

function setTheme() {
  if (html.getAttribute("data-theme") == "dark") {
    html.setAttribute("data-theme", "light");
    console.log("LIGHT MODE ENABLED");
  } else {
    html.setAttribute("data-theme", "dark");
    console.log("DARK MODE ENABLED");
  }
}