'use strict';

const { assert, expect } = require('./../../node_modules/chai');
const { isPrimeNumberSimple, isPrimeNumber, isPrimeNumberErastophene } = require('../');

const isPrimeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
const notPrimeNumbers = [-1, 0, 1, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21];

describe('isPrimeNumber', () => {
  it('Should return true for all elements of isPrimeNumbers array', () => {
    const result = isPrimeNumbers.map((number) => isPrimeNumber(number));
    if (!result.includes(true)) {
      console.log(isPrimeNumbers, result)
    }
    assert.equal(true, !result.includes(false));
  });
  it('Should return false for all elements of notPrimeNumbers array', () => {
    const result = notPrimeNumbers.map((number) => isPrimeNumber(number));
    if (result.includes(true)) {
      console.log(notPrimeNumbers, result);
    }
    assert.equal(true, !result.includes(true));
  });
  it('Should return an exception \'Argument is not a number\' in response to an argument not a number', () => {
    expect(() => isPrimeNumber('number')).to.throw('Argument is not a number');
  });
});

describe('isPrimeNumberSimple', () => {
  it('Should return true for all elements of isPrimeNumbers array', () => {
    const result = isPrimeNumbers.map((number) => isPrimeNumberSimple(number));
    if (!result.includes(true)) {
      console.log(isPrimeNumbers, result);
    }
    assert.equal(true, !result.includes(false));
  });
  it('Should return false for all elements of notPrimeNumbers array', () => {
    const result = notPrimeNumbers.map((number) => isPrimeNumberSimple(number));
    if (result.includes(true)) {
      console.log(notPrimeNumbers, result);
    }
    assert.equal(true, !result.includes(true));
  });
  it('Should return false for string', () => {
    expect(() => isPrimeNumber('number')).to.throw('Argument is not a number');
  });
});


describe('isPrimeNumberErastophene', () => {
  it('Should return true for all elements of isPrimeNumbers array', () => {
    const result = isPrimeNumbers.map((number) => isPrimeNumberErastophene(number));
    if (!result.includes(true)) {
      console.log(isPrimeNumbers, result);
    }
    assert.equal(true, !result.includes(false));
  });
  it('Should return false for all elements of notPrimeNumbers array', () => {
    const result = notPrimeNumbers.map((number) => isPrimeNumberErastophene(number));
    if (result.includes(true)) {
      console.log(notPrimeNumbers, result);
    }
    assert.equal(true, !result.includes(true));
  });
  it('Should return false for string', () => {
    expect(() => isPrimeNumber('number')).to.throw('Argument is not a number');
  });
});
