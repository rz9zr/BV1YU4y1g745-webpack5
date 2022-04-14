function getComponent() {
  return import("lodash").then(({ default: _ }) => {
    const div = document.createElement("div");
    div.innerText = _.join([11, 22, 33, 44, 55], "-");
    return div;
  });
}

getComponent().then((ele) => document.body.appendChild(ele));
