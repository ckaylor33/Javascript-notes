'use strict';

// HIGHER-ORDER

// Two generic functions to start with
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(` `);
  return [first.toUpperCase(), ...others].join(` `);
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transformer(`JavaScript is the best!`, upperFirstWord);
// the transformer function calls the upperFirstWord function as we only pass it in
// the callback function inside of the transformer function that is called is fn
transformer(`JavaScript is the best!`, oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log(`👋`);
};
document.body.addEventListener('click', high5);
// high5 is the callback function, addEventListener is the higher-order function
[`charlie`, `jonas`, `martha`].forEach(high5);

// callbacks helpful as it makes it easy to split up our code into more reusable and interconnected parts
// functionality split up into their own functions

// callback functions allow us to create abstraction - very important
// abstraction means we hide the detail of some code implementation because we don't care about all of the detail - allows us to think about problems at a higher more abstract level
// the transformer function above doesn't care how the string is transformed, it wants to tranform a string but doesn't care how it's done. The detail got abstracted away into other functions (oneWord and upperFirstWord) -  the transformer functgion is only concerned with transforming the input string itself, delegating the string transformation to the other lower level functions
