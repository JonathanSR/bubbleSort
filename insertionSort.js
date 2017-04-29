var array = ["d", "b", "a", "c"]

function insertionSort(array){
  var length = array.length;
  var temp, i, j;

  for (i=0; i < length; i++) {
    temp = array[i];
    for (j = i-1; j > -1 && array[j] > temp; j--) {
      array[j+1] = array[j];
    };
    array[j+1] = temp;
  };
  return array;
};

console.log(insertionSort(array));

module.exports = insertionSort