'use strict';
// Bind method
// Doesn't immediately call a function - returns a new function where the this keyword is bound

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss Airlines',
  iataCode: 'LX',
  bookings: [],
};

const book = lufthansa.book;

// book.call(eurowings, 236, `Sarah Harding`);

const bookEW = book.bind(eurowings); // this will not call the book function, it will return a new function where the this keyword will always be set to eurowings
// can then create one booking function for each airline
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(230, `Steven Williams`); // this function already has the this keyword attached to eurowings
// parameters back to being the flight number and passenger name
const bookEW230 = book.bind(eurowings, 230);
// flight number then set - remianing function for book only then needs the name
bookEW230(`Charlie Kaylor`);
bookEW230(`Wesley Snipes`);

// Other examples of when bind method useful
// Objects together with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this); // now points to lufthansa
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector(`.buy`)
  .addEventListener(`click`, lufthansa.buyPlane.bind(lufthansa));
// needs to be bind as it returns a new function - call would call the functionstraight away and we don't want that on an event listener

// Partial application
// general function for adding tax
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
// what if we have one tax that we use all the time?
const addVAT = addTax.bind(null, 0.23); // don't care about the this keyword as it isn't part of the original function - just want the rate set
console.log(addVAT(100)); // returns 123 as the rate is already set at 0.23
console.log(addVAT(23)); // can now use anything we want
// keep in mind the order of arguments is important when presetting - if you want the rate to be preset then it has to be the first argument in the original function
// different from doing it with default parameters as addVAT is a new more specific function based on a more general function

const addTax2 = rate => value => value + value * rate;
const addVAT2 = addTax2(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
// same as above but function returning a function
