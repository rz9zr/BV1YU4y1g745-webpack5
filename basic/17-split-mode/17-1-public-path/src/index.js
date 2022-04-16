import { add, mul } from "./math";
import "./assets/style.less";
import "./assets/style.css";

const [a, b] = [123, 456];

const divAdd = document.createElement("div");
divAdd.classList.add("result");
divAdd.innerText = `${a} + ${b} = ${add(a, b)}`;
document.body.appendChild(divAdd);

const divMul = document.createElement("div");
divMul.classList.add("result");
divMul.innerText = `${a} + ${b} = ${mul(a, b)}`;
document.body.appendChild(divMul);
