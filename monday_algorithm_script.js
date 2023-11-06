//largest number in array
//empty array to store the largest numbers.
//a variable to keep track of the maximum value.
//Return an array
function largestNumbersInArrays(arr) {
  var result = [];
  var maximumValue = 0;

  for (var i = 0; i < arr.length; i++) {
    var innerArray = arr[i];
    for (var j = 0; j < innerArray.length; j++) {
      if (innerArray[j] > maximumValue) {
        maximumValue = innerArray[j];
      }
    }
    result.push(maximumValue);
  }
  console.log(result);
}

largestNumbersInArrays([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1001, 1000, 857, 1],
]);
