const name1 = "ABA";
const name2 = "SACHIN";
const name3 = "12521";
const name4 = "2343243";

// isPalindrome
const isPalindrome = (name) => {
  let tempString = "";
  for (let i = name.length - 1; i >= 0; i--) {
    tempString += name[i];
  }
  return tempString === name
    ? `${name} is palindrome`
    : `${name} is not palindrome`;
};

console.log(isPalindrome(name1));
console.log(isPalindrome(name2));
console.log(isPalindrome(name3));
console.log(isPalindrome(name4));
