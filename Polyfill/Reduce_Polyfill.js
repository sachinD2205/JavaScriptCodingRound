"use strict";

const newA = [1, 2, 3, 4, 5];
// const newA = [];

//!==============

Array.prototype.reduceSachin = function (callback, defaultValue) {
  if (!this.length && arguments.length < 2) {
    throw new TypeError("reduce empty array with not initial value");
  }

  let startIndex;
  let accumulator;

  if (arguments.length > 1) {
    accumulator = defaultValue;
    startIndex = 0;
  } else {
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    if (!(i in this)) continue;
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

//!==============

const result = newA.reduceSachin((acc, curr) => {
  return (acc += curr);
}, 0);

console.log("result", result);
