import _ from "lodash";

const btn = document.createElement("button");
btn.textContent = "点击计算加法";
btn.addEventListener("click", () => {
  import(/* webpackChunkName: 'math', webpackPreload: true */ "./math.js").then(
    ({ add }) => {
      //import(
      //[> webpackChunkName: 'math', webpackPrefetch: true <] "./math.js"
      //).then(({ add }) => {
      console.log(add(12, 34));
    }
  );
});
document.body.appendChild(btn);

console.log(_.join([12, 34], "-"));
