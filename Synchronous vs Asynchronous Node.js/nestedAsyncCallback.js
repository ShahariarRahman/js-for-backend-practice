console.log("Block 1");

setTimeout(() => {
  const user = { id: 1 };
  setTimeout(() => {
    const products = [{}, {}, {}];
  }, 500);
}, 1000);

console.log("Block 3");
