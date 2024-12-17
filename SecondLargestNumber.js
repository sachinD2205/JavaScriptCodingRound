const num = [12, 3, 5, 787, 3332, 3332, 2, 14, 2, 2, 25, 3];

const secondLargestNumber = (arr) => {
  let a = -1;
  let b = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > a) {
      b = a;
      a = arr[i];
    } else if (arr[i] > b && arr[i] !== a) {
      b = arr[i];
    }
  }

  return b;
};

console.log(secondLargestNumber(num));
