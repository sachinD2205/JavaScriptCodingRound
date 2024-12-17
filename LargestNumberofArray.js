const num = [12, 3, 5, 787, 3332, 2, 14, 2, 2, 25, 3];

const findLargestNumber = (arr) => {
  let a = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > a) {
      a = arr[i];
    }
  }

  return a;
};

console.log(findLargestNumber(num));
