'use strict';

const { assert } = require('./../../node_modules/chai');
const { everything } = require('../');

const dataSet1 = null;
const dataSet2 = [];
const dataSet3 = ['first', 'second', 'third'];
const resultDeep1 = [ [ 'first' ], [ 'second' ], [ 'third' ] ]
const resultDeep2 = [
  [ 'first', 'second' ],
  [ 'first', 'third' ],
  [ 'second', 'third' ],
  [ 'third', 'first' ],
  [ 'third', 'second' ]
];
const resultDeep3 = [
  [ 'first', 'second', 'third' ],
  [ 'first', 'third', 'second' ],
  [ 'second', 'first', 'third' ],
  [ 'second', 'third', 'first' ],
  [ 'third', 'first', 'second' ],
  [ 'third', 'second', 'first' ]
];

describe('Everything with everyone', () => {

});
