const btn = document.createElement("button");
btn.textContent = "点击计算加法";
btn.addEventListener("click", () => {
  import(/* webpackChunkName: 'math' */ "./math.js").then(({ add }) => {
    console.log(add(12, 34));
  });
});
document.body.appendChild(btn);
