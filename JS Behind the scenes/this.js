"use strict";

// this keyword/variable: special variable that is created for every execution context (every function). Takes the value of (points to) the 'owner' of the function in which the this keyword is used

// this is NOT static - not always the same. It depends on how the function is called, and it's value is only assigned when the function is actually called

// Method - this = <Object that is calling the method> - points towards the object that is calling the method
const charlie = {
  name: `Charlie`,
  year: 1991,
  calAge: function () {
    // method attached to the charlie object
    return 2020 - this.year; // accesses the properties that the charlie object has - making the year 1991
  },
};
charlie.calAge(); //method called
// way better than using charlie.year

// Simple function call
// this = undefined - only valid for strict mode, if not it points to global
// can be problematic if this points to global

// Arrow functions
// this = <this of surrounding function (lexical this)>
// if using this keyword inside arrow function - it will point to the surrounding function (parent function)

// Event listener - this = <DOM element that the handler is attached to>

// this in the global scope
console.log(this); // the window object

// regular function
const calcAge = function (birthYear) {
  console.log(2020 - birthYear);
  console.log(this); // undefined in strict mode
};
calcAge(1991);

// arrow function
const calcAgeArrow = (birthYear) => {
  console.log(2020 - birthYear);
  console.log(this); // points to window because of using lexical this keyword - pointing to the parent scope
};
calcAgeArrow(1920);

// method
const charlie = {
  //charlie owner of the method
  year: 1991,
  calcAge: function () {
    console.log(this); // returns charlie object - points to the object calling the method
    console.log(2020 - this.year); //use the this keyword to reference this object and get the year data instead of referencing below
  },
};
charlie.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = charlie.calcAge; //copies the charlie calcAge function into matilda's object (method borrowing so we don't have to duplicate)
matilda.calcAge(); // now logs 3 and points to matilda - here we call the method on matilda so therefore it points to matilda
