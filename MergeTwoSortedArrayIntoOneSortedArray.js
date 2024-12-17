const Array1 = [1, 3, 5, 7, 9];
const Array2 = [2, 4, 6, 8, 10];

// mergeTwoSortedArray
const mergeTwoSortedArray = (arr1, arr2) => {
  const tempArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      tempArr.push(arr2[j]);
      j++;
    } else {
      tempArr.push(arr1[i]);
      i++;
    }
  }

  while (i < arr1.length) {
    tempArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    tempArr.push(arr2[j]);
    j++;
  }

  return tempArr;
};

console.log(mergeTwoSortedArray(Array1, Array2));
