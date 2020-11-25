'use strict';

// IMMEDIATELY INVOKED FUNCTION EXPRESSION

const runOnce = function () {
  console.log(`This will never run again!`);
};
runOnce();
// can do this but nothing stops us later on running this function again
// we want to be able to execute a function immediately and not have to save it somewhere

(function () {
  console.log(`This will never run again!`);
})();
// wrapping in () turns above into an expression
// you can then immediately call it
// this pattern is called the IIFE

(() => {
  console.log(`This will ALSO never run again!`);
})();

// Below is why IIFEs are not widely used in JS anymore
// if all we want to do is create data privacy we can use let and const inside a code block
{
  const isPrivate = 23;
  var notPrivate = 46;
}
console.log(isPrivate);
console.log(notPrivate);

// so only use an IIFE if you want to run a function a single time only
