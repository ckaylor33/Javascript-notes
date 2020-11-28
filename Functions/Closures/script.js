'use strict';

// Closures
// - aren't features that we explicitly use
// - they happen automatically in certain situations

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();

booker();
booker();
booker();

// booker can access the secureBooking - passenger count and increase the passenger count after it's finshed on the call stack
// possible because of closures

// booker function exists in the global scope, with the environment in which the function was created is no longer active (secureBooking)
// booker function however continues to have access to the variables that were present at the time the function was created - in particular the passenger count variable
// closure makes a function remember all the variables that existed at the functions birthplace
// any function always has access to the variable environment of the execution context in which the function was created
// in the case of booker the function was born in the execution context of secureBooking
// therefore the booker function will get access to the secureBooking variable environment
// this is how the function will be able to read and manipulate the passengerCount varibale
// it's this connection we call closure
// closure also has priority over the scope chain

console.dir(booker);

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);
// re-assigning f function
h();
f();
console.dir(f);
// even though the f variable was defined in the global scope, it still closes over the variable environment of the g function - including the a variable that it has access to even after the g function has finished its execution
//  a variable inside the backpack of the f function
// closure changes as variable re-assigned

// Example 2
