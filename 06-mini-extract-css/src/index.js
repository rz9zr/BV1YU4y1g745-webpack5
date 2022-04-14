import "./assets/style.less";
import "./assets/style.css";

const app = document.querySelector("#app");

const title = document.createElement("div");
title.className = "title";
title.innerText = "你好 🌍";
app.appendChild(title);
