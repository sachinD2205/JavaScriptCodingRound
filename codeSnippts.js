// let a = 10;
// function test() {
//   console.log(a);
//   let a = 20;
// }
// test();

//!==========
// console.log(2 + "2");
// console.log("2" + 2);
// console.log(2 - "2");
// console.log("2" - 2);

//!======
// let arr = [1, 2, 3, 4];
// arr[10] = 100;
// console.log(arr.length);
// console.log(arr[9]);
// console.log(arr[10]);
//!======
// var x = 10;
// if (true) {
//   var x = 20;
// }
// console.log(x);
//!========
// console.log([] == false);
// console.log([] === false);
//!=======
// console.log(null == undefined);
// console.log(null === undefined);
//!======
// let a = [1, 2, 3];
// let b = a;
// b.push(4);
// console.log(a);
//!======
// console.log(typeof NaN);
//!=====
// console.log(foo()); // What will this log?
// console.log(foo); // What will this log?
// var foo = function () {
//   return 2;
// };
// console.log(foo()); // What will this log?
//!======
// function createCounter() {
//   let count = 0;
//   return function () {
//     return count;
//   };
// }

// const counter = createCounter();
// console.log(counter()); // What does this log?
// console.log(counter()); // What does this log?
// console.log(counter()); // What does this log?
//!==========
// console.log("Start");

// setTimeout(function () {
//   console.log("Inside setTimeout");
// }, 0);

// Promise.resolve().then(function () {
//   console.log("Inside Promise");
// });

// console.log("End");

//!======
// console.log("Script Start");

// setTimeout(function () {
//   console.log("Inside setTimeout");
// }, 0);

// Promise.resolve()
//   .then(function () {
//     console.log("Promise 1");
//   })
//   .then(function () {
//     console.log("Promise 2");
//   });

// console.log("Script End");

//!====
// var name = "Ale";
// var obj = {
//   name: "Alice",
//   sayName: function () {
//     console.log(this.name);
//   },
// };

// var sayNameFunc = obj.sayName;
// sayNameFunc();
//!=======

// var person = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// var person2 = {
//   firstName: "Jane",
//   lastName: "Smith",
// };

// console.log(person.fullName.call(person2)); // What will this log?
//!=========

// function greet({ name = "Guest", age = 30 }) {
//   console.log(`Hello, ${name}! You are $s{age} years old.`);
// }

// greet({ name: "John" }); // What will this log?
// greet({}); // What will this log?
// greet(); // What will this log?
//!==========
// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.sayName = function () {
//   console.log(this.name);
// };

// function Dog(name) {
//   Animal.call(this, name);
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// var dog = new Dog("Rex");
// dog.sayName(); // What will this log?
//!=========
// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }
//!=========
// document.querySelector("#parent").addEventListener("click", function (e) {
//   console.log("Clicked:", e.target.id);
// });

// document.querySelector("#child").click();
//!=========
// console.log([] + [], "1"); // What will this log?
// console.log([] + {}, "2"); // What will this log?
// console.log({} + [], "3"); // What will this log?
// console.log({} + {}, "4"); // What will this log?
//!=========
// Promise.resolve()
//   .then(() => {
//     throw new Error("Oops!");
//   })
//   .catch((error) => {
//     console.log(error.message);
//   })
//   .then(() => {
//     console.log("This will run after the catch");
//   });
//!=========
// let arr = [1, 2, 3];
// let newArr = arr
//   .map((x) => x * 2)
//   .filter((x) => x > 4)
//   .reduce((a, b) => a + b);
// console.log(newArr); // What will this log?
//!==
// let set = new Set([1, 2, 3]);
// set.add(4);
// set.add(5);
// set.delete(3);

// console.log(set.has(3)); // What will this log?
// console.log(set.size); // What will this log?
//!===
// let arr = [1, 2, 3, 4, 5];
// let [a, b, ...rest] = arr;
// console.log(a); // What will this log?
// console.log(b); // What will this log?
// console.log(rest); // What will this log?

//!=============
// let randomvalue = { name: "Kiran" };
// randomvalue = 8;
// console.log(!typeof randomvalue);
// if (!typeof randomvalue !== "string") {
//   console.log("its not a string");
// } else {
//   console.log("it is string ");
// }

//!The expression console.log(!typeof randomValue); will always output false, because:
//! typeof randomValue always returns a non-empty string (e.g., 'number', 'string', etc.).
//! Any non-empty string is truthy, and applying ! turns it into false.

//!=================

// let randomValue = { name: "kiran" };

// const members = [randomValue];

// randomValue.lastname = "jay";

// randomValue = null;
// console.log(members);

//!===================

// let person = { name: "kiran" };
// function helloBuddy(occupation) {
//   return `${this?.name} is working as ${occupation}`;
// }
// console.log(helloBuddy.call(person, "engineer"));
// console.log(helloBuddy.bind(person, "engineer"));

//!===================

// const animals = {};
// let dog = { emoji: "h" };
// let cat = { emoji: "d" };
// animals[dog] = { ...dog, name: "jony" };
// animals[cat] = { ...cat, name: "sara" };

// console.log(animals[dog]);

//!===============
// function Person(first, last, age) {
//   this.first = first;
//   this.last = last;
//   this.age = age;
// }
// Person.prototype.getFullName = function () {
//   return this.first + this.last;
// };

// const pl = new Person("k", "j", 12);
// console.log(pl.getFullName());

//!===============
// String.prototype.giveMeOnePizza = () => {
//   return "Just give Ne one pizza!";
// };

// const name1 = "Kiran";
// console.log(name1.giveMeOnePizza());
//!===============
// String.prototype.giveMeOnePizza = function () {
//   return "Just give Ne one pizza!" + this;
// };

// const name1 = "Kiran";
// console.log(name1.giveMeOnePizza());
//!===============
// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// Dog.prototype.bark = function () {
//   console.log(`Woof I am ${this.name}`);
// };

// const pet = new Dog("Mara");
// pet.bark();
// delete Dog.prototype.bark;
// pet.bark();

//!===============
//  diffrence between __proto_  vs prototype

//!===============
// classical inheritance vs prototype inheritance
//!===============
// function giveMeOnePizza() {
//   return "Here is pizza!";
// }
// const giveMeOneChoclate = () => {
//   return "Here's chocolate... now go hit the gym already.";
// };

// console.Log(giveMeOnePizza.prototype); // {}
// console.log(giveMeOneChoclate.prototype); // undefined
//!===============
// //! How do you get/ set the prototype of an Object()
// getPrototypeof(object);
// setPrototypeof({}, null);
//!===============
// //!How do you create an object with prototype?
// const user = {
//   name: "Kirandeep",
// };
// const anotherUser = Object.create(user);
// console.log(anotherUser.name);
//!===============
// const firstPromise = new Promise((res, rej) => {
//   setTimeout(res, 500, "one");
// });

// const secondPromise = new Promise((res, rej) => {
//   setTimeout(res, 100, "two");
// });

// Promise.race([firstPromise, secondPromise]).then((res) => console.log(res));
//!===============
// async function getData() {
//   return await Promise.resolve("I made it!");
// }
// const data = getData();
// console.log(data); // Promise {<pending/>}
// console.log(data.then((res) => console.log(res))); // "I made It!"
//!===============
// const myPromise = () => Promise.resolve("I have resolved!");

// function firstFunction() {
//   myPromise().then((res) => {
//     console.log(res, "fist");
//   });
//   console.log("first");
// }

// async function secondFunction() {
//   console.log(await myPromise(1), "second");
//   console.log("second");
// }

// firstFunction();
// secondFunction();

// secondFunction();
// firstFunction();
// first
// I have resolved! fist
// I have resolved! second
// second

// first
// I have resolved! second
// second
// I have resolved! fist

//!_____________________________
// console.log(Promise.resolve(5)); //Promise { 5 }
////!_____________________________

// async function* range(start, end) {
//   for (let i = start; i <= end; i++) {
//     yield Promise.resolve(i);
//   }
// }
// (async () => {
//   const gen = range(1, 3);
//   for await (const item of gen) {
//     console.log(item);
//   }
// })();

// // 1
// // 2
// // 3
//!================
// const myPromise = Promise.resolve("Heyaa");
// (async () => {
//   try {
//     console.log(await myPromise);
//   } catch {
//     throw new Error("bad");
//   } finally {
//     console.log("Yeahh !!! Got it");
//   }
// })();
//!================
// const myPromise = Promise.resolve(Promise.resolve("Promise!"));
// function funcOne() {
//   myPromise
//     .then((res) => res)
//     .then((ress) => console.log(ress, "fist promise "));
//   setTimeout(() => console.log("first timer"), 0);
//   console.log("list line first");
// }

// async function funcTwo() {
//   const res = await myPromise;
//   console.log(await res, "second promise");
//   setTimeout(() => console.log("Timeout! second"), 0);
//   console.log("Last line! second ");
// }
// funcOne();
// funcTwo();

//!====================>
// const promise1 = Promise.resolve("First");
// const promise2 = Promise.resolve("Second");
// const promise3 = Promise.reject("Third");
// const promise4 = Promise.resolve("Fourth");

// const runPromises = async () => {
//   const res1 = await Promise.all([promise1, promise2]);
//   const res2 = await Promise.all([promise3, promise4]);
//   return [res1, res2];
// };
// runPromises()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

//!=============>

// const person = {
//   name: "kirandeep",
//   hobbies: ["coding"],
// };
// function addHobby(hobby, hobbies = person.hobbies) {
//   hobbies.push(hobby);
//   return hobbies;
// }
// addHobby(" running", []);
// addHobby("dancing");
// addHobby("baking", person.hobbies);
// console.log(person.hobbies);
