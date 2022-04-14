import helloWorld from "./helloworld";
import imgsrc from "./assets/foo.png";
import svgdata from "./assets/foo.svg";
import poem from "./assets/foo.txt";
import jpgdata from "./assets/foo.jpg";

helloWorld();

const img = document.createElement("img");
img.style.cssText = `width:25%;height:25%`;
img.src = imgsrc;
document.body.appendChild(img);

const img2 = document.createElement("img");
img2.style.cssText = `width:25%;height:25%`;
img2.src = svgdata;
document.body.appendChild(img2);

const div = document.createElement("div");
div.innerText = poem;
document.body.appendChild(div);

const img3 = document.createElement("img");
img3.style.cssText = `width:25%;height:25%`;
img3.src = jpgdata;
document.body.appendChild(img3);
