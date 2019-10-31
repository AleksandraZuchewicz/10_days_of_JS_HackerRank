"use strict";

let s = 1234;
// function reverseString(s) {
//   try {
//     let stringToSplit = s.split([,]);
//     let reverse = stringToSplit.reverse();
//     let join = reverse.join([,]);
//     return join;
//   } catch (errorMessage) {
//     console.log("s.split is not a function");
//   } finally {
//     return s;
//   }
// }

function reverseString(s) {
  try {
    let array = s.split("");
    array.reverse();
    s = array.join("");
  } catch (e) {
    console.log(e.message);
  } finally {
    console.log(s);
  }
}
console.log(reverseString(s));
