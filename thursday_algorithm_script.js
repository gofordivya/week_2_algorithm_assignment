//sum of array (both assending and decending)
//iteration through for loop should (both assending and decending)

function sumAll(arr) {
  let minNumber = Math.min(arr[0], arr[1]);
  let maxNumber = Math.max(arr[0], arr[1]);
  let sum = 0;

  for (let i = minNumber; i <= maxNumber; i += minNumber < maxNumber ? 1 : -1) {
    sum += i;
  }

  return sum;
}

console.log(sumAll([1, 4])); // Output: 10
