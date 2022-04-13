import helloWorld from "./helloworld";
import imgsrc from "./assets/foo.png";
import svgdata from "./assets/foo.svg";

helloWorld();

const img = document.createElement("img");
img.src = imgsrc;
document.body.appendChild(img);

const img2 = document.createElement("img");
img2.style.cssText = `border:1px solid red`;
img2.src = svgdata;
document.body.appendChild(img2);
