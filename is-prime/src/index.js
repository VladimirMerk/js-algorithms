'use strict';

function isPrimeNumber(n) {
  let result = true;
  const isEven = (num) => num % 2 === 0;
  let errorMsg = '';

  const num = parseInt(n, 10);
  if (Number.isNaN(num)) {
    errorMsg = 'Argument is not a number';
  } else if (num > Number.MAX_VALUE) {
    errorMsg = 'Argument is too large';
  } else if (num <= 1) {
    // All primes are greater than 1
    result = false;
  } else if (num !== 2 && isEven(n)) {
    // All even numbers except 2 compound
    result = false;
  } else {
    let counter = num - 1; // don't check the same number
    const squareRoot = Math.sqrt(n);

    // If a number is not completely divided by any number greater than or equal
    // to the square root of itself, it is prime
    while (counter >= squareRoot) {
      if (num % counter === 0) {
        // Разделилось нацело. Составное
        result = false;
        break;
      }
      counter -= 1;
    }
  }

  if (errorMsg) {
    throw new Error(errorMsg);
  }
  return result;
}

function isPrimeNumberSimple(n) {
  let result = true;
  let counter = n - 1;
  while (counter > 1) {
    if (n % counter === 0) {
      // Разделилось нацело. Составное
      result = false;
      break;
    }
    counter -= 1;
  }
  return result;
}

// console.clear();
// [-100, ...Array(55).keys(), 1000001, 'hello'].forEach((num) => {
//   try {
//     console.log(isPrimeNumber(num) ? `${num} is a PRIME` : `${num} is not a prime`);
//   } catch (e) {
//     console.error('Error for number', num, e);
//   }
// })
// console.log('done!');

console.clear();
console.time('Simple');
[...Array(10000).keys()].forEach((num) => {
  isPrimeNumberSimple(num);
});
console.timeEnd('Simple');

console.time('Optimized');
[...Array(10000).keys()].forEach((num) => {
  isPrimeNumber(num);
});
console.timeEnd('Optimized');
