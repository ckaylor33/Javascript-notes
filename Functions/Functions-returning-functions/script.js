'use strict';

// Functions Returning Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet(`Hey`);

greeterHey(`Charlie`);
greeterHey(`Jonas`);

// greeterHey gets turned into the function inside of the greet function
// greet returned a new function that was stored into greeterHey, making greeterHey a function that we could call

greet(`Hello`)(`Charlie`); // this is the ssame as above
// greet is a function that returns the greeting `Hello` that is then called with the name argument `Charlie`

// re-written with arrow functions
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr(`Yo`)(`Charlie`);
