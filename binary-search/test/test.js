'use strict';

const { assert } = require('./../../node_modules/chai');
const { binarySearch } = require('../');

const dataSet1 = [];
const dataSet2 = [1];
const dataSet3 = [1, 2];
const dataSet4 = [1, 2, 3];
const dataSet5 = [1, 1, 2, 2, 3, 3];

describe('binarySearch', () => {
  it('Should return false for empty array', () => {
    assert.equal(false, binarySearch(dataSet1, 0));
  });

  it('Should return true for one element of array', () => {
    assert.equal(true, binarySearch(dataSet2, 1));
  });

  it('Should return false for one element of array', () => {
    assert.equal(false, binarySearch(dataSet2, 0));
  });

  it('Should return true for extreme elements of array', () => {
    assert.equal(true, !binarySearch(dataSet3, 0) && binarySearch(dataSet3, 1) && binarySearch(dataSet3, 2));
  });

  it('Should return true for repeating array elements', () => {
    assert.equal(true, !binarySearch(dataSet5, 0) && binarySearch(dataSet5, 1) && binarySearch(dataSet5, 2));
  });
});
