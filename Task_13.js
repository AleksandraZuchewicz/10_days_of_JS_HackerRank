"use strict";

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */

// Functional Approach
let nums = [1, 2, 3, 4, 5];
const double = n => n * 2;
const triple = n => n * 3;
const isEven = n => n % 2 == 0;
const multiplyMap = n => (isEven(n) ? double(n) : triple(n));
const modifyArr = nums => nums.map(multiplyMap);
console.log(modifyArr(nums));

function modifyArray(nums) {
  let newArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      let even = nums[i] * 2;
      newArray.push(even);
    } else {
      let odd = nums[i] * 3;
      newArray.push(odd);
    }
  }
  return newArray;
}
console.log(modifyArray(nums));

function main() {
  const n = +readLine();
  const a = readLine()
    .split(" ")
    .map(Number);

  console.log(
    modifyArray(a)
      .toString()
      .split(",")
      .join(" ")
  );
}
