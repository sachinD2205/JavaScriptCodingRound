let input1 = "";
let input2 = "";

const isValidAnagram = (str1, str2) => {
  if (!str1 || !str2) {
    return "invalid input";
  }
  if (str1?.length != str2?.length) {
    return "not valid anagram";
  }
  let a = str1.split("").sort().join("");
  let b = str2.split("").sort().join("");

  if (a == b) {
    return "is Valid Anagram";
  } else {
    return "not valid anagram";
  }
};

console.log(isValidAnagram(input1, input2));
