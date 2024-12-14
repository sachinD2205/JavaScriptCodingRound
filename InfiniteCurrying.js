// Infinite Currying

const add = (input1) => {
  return (input2) => {
    if (input2) {
      return add(input1 + input2);
    } else {
      return input1;
    }
  };
};
console.log(add(1)(2)(3)(4)(5)());

function abc() {
  console.log("abc");
}
abc();
