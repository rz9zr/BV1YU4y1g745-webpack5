import "./assets/style.css";
import "./assets/style.less";

const alert = document.createElement("div");
alert.className = "alert alert-primary";
alert.innerText = "A simple primary alert—check it out!";
document.body.appendChild(alert);
