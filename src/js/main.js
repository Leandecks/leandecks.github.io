import "../index.html";
import "@picocss/pico/css/pico.amber.min.css";
import "../css/style.css";

document.addEventListener("DOMContentLoaded", function () {
  createHoverTexts();
  setThemeSwitcher();
});

function createHoverTexts() {
  const imgContainers = document.querySelectorAll(".img");
  [...imgContainers].forEach((img) => {
    const text = document.createElement("a");
    text.href = img.firstElementChild.href;
    text.target = "_blank";
    text.textContent = "Live demo";
    text.classList.add("txt");
    text.style.display = "none";
    img.appendChild(text);
    img.addEventListener("mouseover", () => {
      text.style.display = "block";
    });
    img.addEventListener("mouseout", () => {
      text.style.display = "none";
    });
  });
}

function setThemeSwitcher() {
  const btn = document.querySelector("#theme-switcher");
  const html = document.querySelector("html");
  let value = "dark";

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    value = "dark";
    btn.classList.remove("nf-oct-moon");
    btn.classList.add("nf-oct-sun");
  }

  btn.addEventListener("click", () => {
    if (value === "dark") {
      value = "light";
      html.setAttribute("data-theme", "light");
      btn.classList.remove("nf-oct-sun");
      btn.classList.add("nf-oct-moon");
    } else {
      value = "dark";
      html.setAttribute("data-theme", "dark");
      btn.classList.remove("nf-oct-moon");
      btn.classList.add("nf-oct-sun");
    }
  });
}
