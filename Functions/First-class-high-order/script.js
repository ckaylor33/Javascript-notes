'use strict';

// FIRST-CLASS
// - JS treats functions as first-class citizens
// - This means that functions are simply values
// - Functions are just another 'type' of object
// - Can be stored in variables or object properties
// - Stored in variable
const add = (a, b) => a + b;
// - Stored in object
const counter = {
  value: 25,
  inc: function () {
    this.value++;
  },
};
// - Can pass functions as arguments to OTHER functions:
const greet = () => console.log(`Hey Charlie`);
btnClose.addEventListener(`click`, greet);
// - Can return functions FROM functions
// - Call methods on functions:
counter.inc.bind(someOtherObject);

// HIGHER-ORDER
// - A function that receives another function as an argument, that returns a new function, or both:
const greet1 = () => console.log(`Hey Charlie`);
btnClose.addEventListener(`click`, greet1);
// - The addEventListener is the higher-order function above; because it receives another functionas an input - the greet1 function - the greet1 function passed in is a callback function - the callback function will be called later by the higher-order function - can be seen in many other use cases as well
// - This is only possible because of first-class functions
// - Functions that return another function:
function count() {
  let counter = 0;
  return function () {
    counter++;
  };
}

// First-class functions is just a feature that either a programming language has or doesn't have - just means all functions are values, that's it. No first-c;ass functions in practice, it's just a concept.
// Higher-order functions can be seen in practice, only made possible by first-class functions.
