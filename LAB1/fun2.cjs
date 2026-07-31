const f1 = () => {
  console.log("f1");
};
const f2 = () => {
  console.log("f2");
};
const f3 = () => {
  console.log("f3");
};
function main() {
  console.log("main");
  setTimeout(f1, 50);
  setTimeout(f3 , 50) ; 
  new Promise((resolve, reject) => { 
    resolve("i am promise 1 ");
}).then((resolve) => console.log(resolve));

    new Promise((resolve, reject) => {
    resolve("i am promise 2 ");
}).then((resolve) => console.log(resolve));
  // setInterval(f1,1000);
//   setImmediate(f2);
  f2();
}
main();
