var array = ["d", "b", "a", "c"]

function bubbleSort(array) {
  var length = array.length;
  var temp, i, j;

  for(i = length -1; i >= 0; i--) {
    for(j = 0; j <= i; j++){
      if(array[j+1] < array[j]){
        temp = array[j];
        array[j] = array[j+1];
        array[j + 1] = temp;
      };
    };
  };
  return array;
};

console.log(bubbleSort(array));

module.exports = bubbleSort