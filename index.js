// Ecmascript 2015

// var, let and const keyword

// var age = 49;
// if (age > 18) {
//   var product = "laptop"; //not a block scope
// }

// const greet = () => {
//   var product = "laptop"; // function scope
// };
// console.log(product);

// let product = "laptop";
// product = "mobile"; // we will change this type of variable
// console.log(product);

// const age = 20;
// age = 12; //not change this type of variable
// console.log(age);

// hoisting
// console.log(age); // js engine give all the var varible this datatype at compile time
// var age = 12;
// console.log(age);

//Objects
// const product = {
//   age: 30,
//   name: 49,
//   language: "Rushikesh",
// };

// product.age = 90;
// console.log(product);

//2.arrow finctions

// function greet() {
//   console.log("Hello, everyone!");
// }

// const greet = () => console.log("Hello");

// console.log(this);
// const shop = {
//   purchase() {
//     console.log(this);
// //   },
// };
// greet();

//templete literals
// const fistName = "Rushikesh";
// const lastName = "Mungse";
// const greet = `
// Hello rushikesh
// now a I am happy
// `;

// console.log(greet);
// console.log(`${fistName} ${lastName}`);

//object oriented programing

// function Person(name) {
//   this.name = name;
// }
// const rushi = new Person("Rushi");
// console.log(rushi.name);

class Person {
  name;
  age;
  fullName;

  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.fullName = "rushikesh mungse";
  }
}

const rushi = new Person("rushikesh", 43);
const rahul = new Person("rushikesh mungse");
console.log(rushi);
console.log(rahul);
