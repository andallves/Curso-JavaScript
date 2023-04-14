function diagonalDifference(arr) {
  // Write your code here
  const length = arr.length;
  let sum1 = 0;
  let sum2 = 0;
  let sum = 0;


  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (i === j) {
        sum1 += arr[i][j];
      }
      if (j === (length - (i + 1))) {
        console.log(arr[i][j])
        sum2 += arr[i][j];
      }
    }
  }
  sum = sum1 - sum2
  return sum < 0 ? (sum * -1) : sum;
}
const arr = [[8, 4, -2], [4, -6, 5], [-3, 7, 3]];
console.log(diagonalDifference(arr));