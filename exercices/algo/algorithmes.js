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

// console.log(isPalindrome("kayak")); // true
// console.log(isPalindrome("hello")); // false

function areAnagrams(str1, str2) {
  let split1 = str1.split("");
  let split2 = str2.split("");
  split1.every(function (element) {
    console.log(element);
    console.log(!split2.includes(element));
    if (!split2.includes(element)) return false;
  });
  return true;
}

// console.log(areAnagrams("hello", "world"));

// Exercice 3.4
function fibonacci(n) {
  result = 0;
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    for (let i = 0; i < n; i++) {
      result = fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  return result;
}

console.log(fibonacci(10));

// Exercice 3.5
function sortArray(arr) {
  const longueur = arr.length;
  for (let i = 0; i < longueur - 1; i++) {
    for (let j = 0; j < longueur - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let old = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = old;
      }
    }
  }
  return arr;
}

function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

// console.log(sortArray([3, 1, 4, 1, 5, 9, 2])); // [1, 1, 2, 3, 4, 5, 9]
// console.log(findMax([3, 1, 4, 1, 5, 9, 2])); // 9

// Exercice 3.6
const products = [
  { id: 1, name: "Laptop", price: 999, category: "Electronics" },
  { id: 2, name: "Phone", price: 699, category: "Electronics" },
  { id: 3, name: "Desk", price: 299, category: "Furniture" },
  { id: 4, name: "Chair", price: 199, category: "Furniture" },
  { id: 5, name: "Monitor", price: 299, category: "Electronics" },
];

function filterByCategory(products, category) {
  let filteredProducts = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].category == category) t.push(products[i]);
  }
  return filteredProducts;
}

function getAveragePrice(products) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < products.length; i++) {
    sum = sum + products[i].price;
    count++;
  }

  return sum / count;
}

function getMostExpensive(products) {
  let currentMostExpensive = 0;
  for (let i = 0; i < products.length; i++) {
    if (products[i].price > currentMostExpensive)
      currentMostExpensive = products[i];
  }
  return currentMostExpensive;
}

function groupByCategory(products) {
  let categoryTable = {};

  // Populate categoryTable

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const category = product.category;
    if (categoryTable[category] === undefined) categoryTable[category] = [];

    const length = categoryTable[category].length;
    categoryTable[category][length] = products[i];
  }
  return categoryTable;
}

// console.log(filterByCategory(products, "Electronics"));
//console.log(getAveragePrice(products));
//console.log(getMostExpensive(products));
//console.log(groupByCategory(products));
