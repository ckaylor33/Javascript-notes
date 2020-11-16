"use strict";

// Hoisting makes some types of variables accessible/usable in the code before they are declared

// Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the variable environment object

// 1. function declarations
// hoisted - yes
// initial value - actual function - can use function declarations before declared in code as it's stored in the variable environment object before code starts executing
// scope - block (strict mode) otherwise function scope

// 2. var variables
// hoisted - yes
// initial value - get undefined when accessing before it's declared in code - this can be buggy and why we don't use var usually in modern JS
// function scope

// 3. let and const variables
// hoisted - no
// initial value <uninitialized>, TDZ
// variables placed in temporal dead zone - makes it so we cant access the variables between the beginning of the scope and the place where the variables are declared
// if we try to use a let or const before it's declared we get an error
// block scope

// 4. function expressions and arrows
// depends if using var or let/const
// because these functions are just variables they behave the same way

// const myName = `Charlie`;

// if (myName === `Charlie`) {
//   console.log(`Charlie is a ${job}`); // can't access job before initialization
//   // job is in the TDZ
//   const age = 2037 - 1991;
//   console.log(age);
//   const job = `Software Dev`; // job only safe to use after it's declared (after the TDZ)
//   // makes it much easier to avoid and catch errors
//   // also makes const variables impossible to use before defined
//   console.log(x); // Reference error: x is not defined
// }

//Variables
console.log(me); // undefined
console.log(job); // cannot access before initialization
console.log(year); // same as above let variable

var me = `Charlie`;
let job = `software dev`;
const year = `1991`;

//Functions
console.log(addDec(3, 3)); // returns 6 - can call before defined in code
console.log(addExp(3, 3)); // cannot access before initialization
console.log(addArrow(3, 3)); // cannot access before initialization

function addDec(a, b) {
  return a + b;
}

const addExp = function (a, b) {
  // if changed to var, would get addExp is not a function
  // as we would be trying to call undefined
  // same would happen in below function if var is used
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart(); // here the number of products is undefined
//because undefined is a falsey value this code will still execute

var numProducts = 10; // get all products deleted due to hoisting

function deleteShoppingCart() {
  console.log(`All products deleted!`);
}

//DON'T use var, use const most of the time and let if you need to change it later
//ALSO declare variables at the top of each scope
//Always declare functions first and use after declaration
