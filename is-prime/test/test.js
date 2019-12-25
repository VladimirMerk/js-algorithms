'use strict';

const assert = require('assert')
const rgbToHex = require('../');

describe('#rgbToHex()', () => {
  it('should return #FFFFFF when no parameters are passed', () => {
    assert.equal('#FFFFFF', rgbToHex());
  });
  it('should return #FFFFFF when the parameters are undefined', () => {
    assert.equal('#FFFFFF', rgbToHex(undefined, undefined, undefined));
  });
  it('should return #000000 when the parameters are NaN', () => {
    assert.equal('#000000', rgbToHex(NaN, NaN, NaN));
  });
  it('should return #000000 when the parameters are strings', () => {
    assert.equal('#000000', rgbToHex('s', 't', 'r'));
  });
  it('should return #010203 when the parameters are less than 10 and there are more than three of them', () => {
    assert.equal('#010203', rgbToHex(1, 2, 3, 4, 5));
  });
  it('should return #0A64C8 when the parameters 10, 100 and 200', () => {
    assert.equal('#0A64C8', rgbToHex(10, 100, 200));
  });
  it('should return #0064FF when the parameters -100, 100 and 300 are out of range', () => {
    assert.equal('#0064FF', rgbToHex(-100, 100, 300));
  });
})
