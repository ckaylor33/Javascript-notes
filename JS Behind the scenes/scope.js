"use strict";

// Each execution context has:
// 1. Variable environment
// 2. Scope chain
// 3. this keyword

// What is scope and scope chain?
// How our program's variables are organized and accessed. Where can we access certain variables?
// Lexical scoping: controlled by placement of functions and blocks in the code - example - function written inside another function has access to the variables of the parent function

// Scope: space or environment in which a certain variable is declared -
// 1. Global scope
// - Top level code
// - Outside of any function or block
// - Variables declared in global scope are accessible everywhere

const me = `Charlie`;
const job = `Software Developer`;
const year = `1991`;

// 2. Function scope
// - Variables are accessible only inside function, NOT outside
// - Also called local scope

function calcAge(birthyear) {
  const now = 2020;
  const age = now - birthYear;
  return age;
}
console.log(now); // Reference error - not accessible

// 3. Block scope (ES6)
// - Blocks - inside curly braces
// - Variables are accessible only inside block (blcok scoped)
// - HOWEVER, this only applies to let and const variables!
// - Var would be accessible outside the block - scoped to current function or global scope
// - Var function scoped
// - Functions are also block scoped (only in strict mode)
// - Means functions declared inside a block are only accessible inside that block

if (year >= 1981 && year <= 1996) {
  const millenial = true;
  const food = `Avocado toast`;
}
console.log(millenial); // Reference error - not accessible

// The Scope Chain

const myName = `Charlie`; //Global scope - only considering variable declarations

function first() {
  // Scope for first function
  const age = 29;

  if (age >= 29) {
    // true
    // Block scope starts
    const decade = 2; // Scoped inside this block
    var millenial = true; //Belongs to first function scope
    // Block scope gets access to first scope and global scope variables
    // Block scope ends
  }

  function second() {
    // Scope for second function
    const job = "Software developer";

    console.log(`${myName} is a ${age}-old ${job}`);
    // Charlie is a 29-old Software Developer
    // Every scope has access to variables from all outer scopes
    // Can therefore build the string seen above
    // If one scope needs a variable it will keep looking up the chain until found or not found
    // Does not copy the variables into it's own scope, just looks
    // Does not work the other way round - outside scope can't access variable from inner scope

    //Second function scope ends
  }
  second();
  // First function scope ends
}
first();

//Scope chaine vs call stack

const a = `Charlie`;
first();

function first() {
  const b = `Hi!`;
  second();

  function second() {
    const c = `Hello there!`;
    third();
  }
}

function third() {
  const d = `Heya!`;
  console.log(d + c + b + a);
  // Reference error
  // Can't access c or b - can't be found in the third scope or scope chain (looks up to global scope)
}

// CALL STACK FOR ABOVE

// Global
// a = `Charlie`
// first = <function>
// third <function>

// first()EC
// b = `Hi!`;
// second = <function>

// second()EC
// c = `Hello there!`;

// third()EC
// d = `Heya!`;

// Scope chain has nothing to do with the execution context - order in which functions are called
