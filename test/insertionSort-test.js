const assert = require('chai').assert
const insertionSort = require('../insertionSort')

describe('insertionSort', function() {
  it ("can return a sorted array", function(){
    array = ["z", "a", "r", "i"]
    assert.deepEqual(insertionSort(array), ["a", "i", "r", "z"])
  });
});