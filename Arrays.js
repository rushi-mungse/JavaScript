const colors = require("colors");
console.log("program start...............................".bgMagenta);

// Arrays --> It's a container to store different data type of data.

// Declaration of arrays
// const languages = ["Python", "JavaScript", "Java", "C++"];
// console.log(languages);
// console.log(languages[0]);
// 1.push()
// const updatedArr = languages.push("C#");
// console.log(updatedArr);
// 2.pop()
// languages.pop();
// 3.unshift()
// languages.unshift("C++");
// 4.shift()
// languages.shift();
// 5.length of arr
// const lengthOfLanguages = languages.length
// console.log(languages);

const actors = [
  { id: 1, payment: 200 },
  { id: 2, payment: 300 },
  { id: 3, payment: 400 },
];

// 1.for loop
// for (let i = 0; i < actors.length; i++) {
//   console.log(actors[i]);
// }
// 2.map
// actors.map((actor) => {
//   actor.payment -= 100;
// });
// 3.forEach
// actors.forEach((actor) => {
//   actor.payment -= 100;
// });
// 4.filter
// const newArray = actors.filter((actor) => {
//   return actor.payment !== 300;
// });
// console.log(newArray);
// 5.for of
// for (let actor of actors) {
//   console.log(actor.payment);
// }
// 6.reduce
// const total = actors.reduce((acc, actor) => {
//   return (acc += actor.payment);
// }, 0);
// console.log(total);
// 7.at()
// console.log(actors.at(2));
// 8.concatinate
const arr1 = [2, 3, 4, 5];
const arr2 = ["html", "css", 4];
const arr3 = arr1.concat(arr2);
// console.log(arr3);
// console.log(arr3.toString());
console.log(JSON.stringify(arr3, null, " "));
console.log("program end..............................".bgMagenta);
