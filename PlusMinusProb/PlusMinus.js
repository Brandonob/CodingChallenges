// Given an array of integers, calculate the ratios of its elements that are positive,
// negative, and zero. Print the decimal value of each fraction on a new line with
// 6 places after the decimal.
// Example
// arr = [1,1,0,-1,-1]
// There are n=5 elements, two positive, two negative and one zero.
// Their ratios are 2/5 = 0.400000, 2/5 = 0.400000 and 1/5 = 0.200000.
// Results are printed as:
// 0.400000
// 0.400000
// 0.200000

// Note To Self: If asked for number value, ansers may have to be converted
// from string to number.(ParseInt())

function plusMinus(arr) {
  // Write your code here
  let positives = 0;
  let negatives = 0;
  let zeros = 0;

  arr.forEach((el) => {
    if (Math.sign(el) === 1) {
      positives++;
    } else if (Math.sign(el) === -1) {
      negatives++;
    } else if (Math.sign(el) === 0) {
      zeros++;
    }
  });
  console.log((positives / arr.length).toFixed(6));
  console.log((negatives / arr.length).toFixed(6));
  console.log((zeros / arr.length).toFixed(6));
}
