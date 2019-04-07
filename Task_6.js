/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
  // Complete the function
  let sortedNums = nums.sort(function(a, b) {
    return b - a;
  });
  for (let i = 1; i < sortedNums.length; i++) {
    if (sortedNums[i] !== sortedNums[i - 1]) {
      return sortedNums[i];
    }
  }
}
