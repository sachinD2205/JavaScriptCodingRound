const newArray = [4, 23, 3, 23, 5, 5, 6, 3, 6, 7, 8, 4, 2, 1];
function secondLargest(arr) {
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;

  for (let i = 0; i < arr?.length; i++) {
    let currentValue = arr[i];
    if (currentValue > first) {
      third = second;
      second = first;
      first = arr[i];
    }
    if (currentValue > second && currentValue !== first) {
      third = second;
      second = currentValue;
    }
    if (
      currentValue > third &&
      currentValue !== first &&
      currentValue !== second
    ) {
      third = currentValue;
    }
  }

  return third;
}

console.log("countNumber", secondLargest(newArray));
