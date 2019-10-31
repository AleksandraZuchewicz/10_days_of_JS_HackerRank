"use strict";

let dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let dateString = "10/11/2009";
function getDayName(dateString) {
  let dayName;
  dayName = dayNames[new Date(dateString).getDay()];
  return dayName;
}

console.log(getDayName(dateString));
