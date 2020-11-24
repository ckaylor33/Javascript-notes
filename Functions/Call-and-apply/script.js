'use strict';

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

lufthansa.book(239, `Charlie Kaylor`);
lufthansa.book(635, `John Wick`);
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, `Sarah Harding`);

// CALL METHOD
book.call(eurowings, 236, `Sarah Harding`);
// first argument is what we want the this keyword to point to
// called the call method which calls the book function, with the this keyword set to eurowings
// otherwise the book function is just a regular function as it's copied out of the lufthansa object, being a method no longer
// so call allows us to manually and explicitly set the this keyword of any function we want to call
// any arguments after the first one are just the arguments of the original function
console.log(eurowings);

book.call(lufthansa, 254, `Mary Cooper`);
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Airlines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 876, `Denzel Washington`);

// APPLY METHOD
// Apply does mostly the same thing, but does not receive a list of arguments after the this keyword
// will take an array of the arguments instead
const flightData = [564, `The President`];
book.apply(swiss, flightData);
console.log(swiss);
// apply method not widely used anymore in modern JS
// better way of doing the same thing:
book.call(swiss, ...flightData);
console.log(swiss);
// spread operator to add the other two arguments in
