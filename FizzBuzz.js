// Write a function that prints the numbers from n. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

// Write a program to print to the screen numbers 1 to n
// case1 = multiples of 3, print 'fizz'
// case2 = for multiples of 5, print 'buzz'
// case3 = for multiples of both 3 and 5 print 'fizzbuzz'

const input = 15;

//! Expected Output
// 1
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz
// 11
// fizz
// 13
// 14
// fizzbuzz

const fizzBuzz = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(input);
