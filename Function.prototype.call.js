// The Function.prototype.call() method calls the function with a given this value and arguments provided individually.

// Source: Function.prototype.call() - JavaScript | MDN

// Implement your own Function.prototype.call without calling the native call method. To avoid overwriting the actual Function.prototype.call, implement the function as Function.prototype.myCall.

// Examples

// function multiplyAge(multiplier = 1) {
//   return this.age * multiplier;
// }

// const mary = {
//   age: 21,
// };

// const john = {
//   age: 42,
// };

// multiplyAge.myCall(mary); // 21
// multiplyAge.myCall(john, 2); // 84

Function.prototype.myCall = function (thisArg, ...argArray) {
    thisArg = thisArg || globalThis
    thisArg._temp = this;
    const result = thisArg._temp(...argArray)
    delete thisArg._temp;
    return result;
};

function multiplyAge(multiplier = 1) {
  return this.age * multiplier;
}

const mary = {
  age: 21,
};

const john = {
  age: 42,
};

console.log(multiplyAge.myCall(mary)); // 21
console.log(multiplyAge.myCall(john, 2)); // 84