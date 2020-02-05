'use strict';

/**
 * Returns an array filled with numbers from start to end
 * @param  {Number} start from
 * @param  {Number} end   to
 * @return {Array}
 */
function getArrayRange(start, end) {
  return Array.from(
    { length: end - start + 1 },
    (v, k) => start + k,
  );
}

function isPrimeNumber(n) {
  let result = true;
  const isEven = (num) => num % 2 === 0;
  const isFifth = (num) => num % 5 === 0;
  const num = parseInt(n, 10);
  if (Number.isNaN(num)) {
    throw new Error('Argument is not a number', num);
  } else if (num <= 1) {
    // All primes are greater than 1
    result = false;
  } else if (num !== 2 && isEven(num)) {
    // All even numbers except 2 compound
    result = false;
  } else if (num > 5 && isFifth(num)) {
    // All fifth numbers except 5 compound
    result = false;
  } else {
    let counter = num - 1; // don't check the same number
    const squareRoot = Math.sqrt(num);

    // If a number is not completely divided by any number greater than or equal
    // to the square root of itself, it is prime
    while (counter >= squareRoot) {
      if (num % counter === 0) {
        // Divided completely. Compound
        result = false;
        break;
      }
      // from max to min
      counter -= 1;
    }
  }
  return result;
}

function isPrimeNumberSimple(n) {
  let result = true;
  if (n >= 2) {
    let counter = n - 1; // don't check the same number
    while (counter > 1) {
      if (n % counter === 0) {
        // Divided completely. Compound
        result = false;
        break;
      }
      // from max to min
      counter -= 1;
    }
  } else {
    result = false;
  }
  return result;
}

function getPrimeRangeSimple(n) {
  let result = [];
  if (n > 1) {
    result = getArrayRange(2, n);
    result = result.filter((num) => isPrimeNumberSimple(num));
  }
  return result;
}

function getPrimeRange(n) {
  let result = [];
  if (n > 1) {
    result = getArrayRange(2, n);
    result = result.filter((num) => isPrimeNumber(num));
  }
  return result;
}

function getPrimeEratospheneRange(n) {
  let result = [];
  if (n > 1) {
    result = getArrayRange(2, n);

    // Returns the index of the nearest greater than currentNum number
    const getNextIndex = (currentNum) => result.findIndex((num) => num > currentNum);
    let length = 0;
    let currentNum = 0;
    do {
      length = result.length;
      currentNum = result[getNextIndex(currentNum)];
      // Sifs out all values that are divided by currentNum, except currentNum itself
      result = result.filter((num) => num === currentNum || num % currentNum !== 0);
    } while (length > result.length);
  }
  return result;
}

function isPrimeNumberErastophene(n) {
  const arr = getPrimeEratospheneRange(n);
  return arr.includes(n);
}

if (typeof module !== 'undefined' && module.exports != null) {
  exports.isPrimeNumberSimple = isPrimeNumberSimple;
  exports.isPrimeNumber = isPrimeNumber;
  exports.isPrimeNumberErastophene = isPrimeNumberErastophene;
}

console.clear();
console.time('Simple');
console.log(getPrimeRangeSimple(10000));
console.timeEnd('Simple');

console.time('Optimized');
console.log(getPrimeRange(10000));
console.timeEnd('Optimized');

console.time('Eratosphene');
console.log(getPrimeEratospheneRange(10000));
console.timeEnd('Eratosphene');
