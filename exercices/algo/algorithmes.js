function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let result = i;
    if (i % 3 === 0 && i % 5 === 0) {
      result = "FizzBuzz";
    } else if (i % 3 === 0) {
      result = "Fizz";
    } else if (i % 5 === 0) {
      result = "Buzz";
    }
    console.log(result);
  }
}
//fizzBuzz(15);

function isPalindrome(str) {
  let reverse = str.split("").reverse().join("");
  return reverse == str;
}

console.log(isPalindrome("kayak")); // true
console.log(isPalindrome("hello")); // false
