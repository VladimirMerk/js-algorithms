'use strict';

function getRandomArray(length, max) {
  // map method for an array filled with empty values will not work, because
  // map method is launched in the context of array objects. Therefore,
  // in addition to creating an array, you need to fill it with any values
  // (new Array(length).fill(0), [...new Array(length)], new Array(...new Array(length)))
  return new Array(length).fill(null).map(() => Math.round(Math.random() * max));
}

function binarySearch(array, needle) {
  let result = false;
  array.sort((a, b) => a - b);

  const search = (partArray) => {
    console.count(`binarySearch ${needle}`);
    let searchResult = false;
    const median = Math.floor(partArray.length / 2);
    if (needle === partArray[median]) {
      searchResult = true;
    } else if (needle < partArray[median] && partArray.length > 1) { // left part
      searchResult = search(partArray.slice(0, median), needle);
    } else if (needle > partArray[median] && partArray.length > 1) { // right part
      searchResult = search(partArray.slice(median), needle);
    }
    return searchResult;
  };
  result = search(array);
  return result;
}

const arrayCount = 1000000;
const randArray = getRandomArray(arrayCount, arrayCount);
console.time('Search time 50');
console.log(binarySearch(randArray, 50) ? 'Found' : 'Not found');
console.timeEnd('Search time 50');
console.time('Search time 5000000');
console.log(binarySearch(randArray, 5000000) ? 'Found' : 'Not found');
console.timeEnd('Search time 5000000');
console.time('Search time 50000000');
console.log(binarySearch(randArray, 50000000) ? 'Found' : 'Not found');
console.timeEnd('Search time 50000000');
if (typeof module !== 'undefined' && module.exports != null) {
  exports.binarySearch = binarySearch;
}
