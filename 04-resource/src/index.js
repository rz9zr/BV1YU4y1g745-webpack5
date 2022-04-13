import helloWorld from "./helloworld";
import imgsrc from "./assets/foo.png";

helloWorld();

const img = document.createElement("img");
img.src = imgsrc;
document.body.appendChild(img);
