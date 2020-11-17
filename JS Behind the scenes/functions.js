"use strict";
// regular functions vs arrow functions

const charlie = {
  firstName: `Charlie`,
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2020 - this.year);

    //Solution 1
    // const self = this; //preserves the this keyword
    // console.log(self); // this is a solution as the self variable is outside of the function and has access to the charlie object
    // const isMillenial = function () {
    //   console.log(this); //undefined as it is a regular function call - as if the function is outside the method - inside of a regular function the this keyword must be undefined
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   //   console.log(this.year >= 1981 && this.year <= 1996);
    // };

    //Solution 2 ES6
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996); // works because of the arrow function using the this keyword of the parent scope - charlie object
    };

    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`), //undefined as the object isn't a code block - this keyword points to global scope here - never use an arrow function as a method
};
charlie.greet();
charlie.calcAge();

//Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5); //get an array
addExpr(2, 5, 3, 10);

var addArrow = (a, b) => {
  console.log(arguments); //doesn't exist in arrow functions
  return a + b;
};
addArrow(2, 5, 4);
