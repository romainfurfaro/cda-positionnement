/**
 * La fonction commence par une boucle qui parcourt i fois le paramètre n et sa longueur est déterminé par i <= n pour chaque occurrence/passage dans la boucle.
 * Ce même paramètre est utilisé pour le calcul, en se servant du modulo (le reste de l'opération)
 * pour déterminer si le résultat affichera FizzBuzz, Fizz ou Buzz. le résultat est affiché pour chaque occurence dans la boucle car le résultat est calculé + affiché dans celle-ci.
 *
 */
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
