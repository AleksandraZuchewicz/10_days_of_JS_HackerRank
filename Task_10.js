"use strict";

/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
  Rectangle = {
    length: a,
    width: b,
    perimeter: 2 * (a + b),
    area: a * b
  };
  return Rectangle;
}
