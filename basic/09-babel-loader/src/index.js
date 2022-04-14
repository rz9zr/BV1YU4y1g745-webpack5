import foo from "./foobar";

foo()
  .then((value) => console.log(value))
  .catch((reason) => console.error(reason));
