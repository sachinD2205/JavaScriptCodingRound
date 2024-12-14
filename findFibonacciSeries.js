const findFibonacciSeries = (number) => {
  let a = 0;
  let b = 1;
  let result = 0;
  for (let i = 0; i < number - 1; i++) {
    if (i > 1) {
      result = a + b;
      console.log(result);
      a = b;
      b = result;
    } else {
      console.log(i);
    }
  }
};
findFibonacciSeries(10);
