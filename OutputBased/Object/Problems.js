window.person = "Yomesh";

var deletePerson = () => {
  delete person;
  return person;
};

console.log(deletePerson());

//!=============================================

let person = "Yomesh";

var deletePerson = () => {
  delete person;
  return person;
};

console.log(deletePerson());

//!=============================================

let x = 1;

do {
  let y = --x;
  console.log(x++ + --y);
} while (x++ < 5);



//! =========================


"use strict";

let foo = {
  barX: function () {
    console.log(this);
  },
  barY: () => {
    console.log(this);
  },
};

let barX = foo.barX;
let barY = foo.barY;

foo.barX(); // Output1?
foo.barY(); // Output2?
barX(); // Output3?
barY(); // Output4?

//!=============================================


var foo = 1;
var change = () => {
  this.foo = 2;
  console.log(this.foo);
};
var obj = {
  foo: 3
};
var bounded = change.bind(obj);

// What would be the output of the following?
console.log(foo); 
change();
console.log(foo); 
console.log(obj.foo); 
bounded(); 



//!=============================================