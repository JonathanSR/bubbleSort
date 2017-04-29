const assert = require('chai').assert
const bubbleSort = require('../bubbleSort')

describe('bubblesort', function() {
  it("can return a sorted array", function() {
    array = ["z", "a", "r", "i"]
    assert.deepEqual(bubbleSort(array), ["a", "i", "r", "z"])
  });
});