function getString() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello，世界");
    }, 2000);
  });
}

async function foo() {
  return await getString();
}

export default foo;
