'use strict';

// Primitive and Reference types in functions
const flight = 'LH234';
const charlie = {
  name: 'Charlie Kaylor',
  passport: 24739479284,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = `Mr. ` + passenger.name;
  if (passenger.passport === 24739479284) {
    alert(`Check in`);
  } else {
    alert(`Wrong passport!`);
  }
};

// checkIn(flight, charlie);

// console.log(flight);
// primitive
// flightNum contains a copy of flight so it returns this instead of redefining flightNum in the function - same as writing const flightNum = flight;
// flightNum a completely different variable so doesn't get reflected in the flight variable
// what we change in the new copy will not change in the original

// console.log(charlie);
// reference
// when we pass a reference type to a function, what is copied is just the reference to the object in the memory heap. Like doing this:
// const passenger = charlie;
// whatever we change in the copy will also change in the original

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};
newPassport(charlie); // passing in object which gets manipulated
checkIn(flight, charlie); // then gets called by another function as the manipulated version - returns `Wrong Passport!`

// JS does not have passing by reference even though it looks that way, only has passing by value
// the reference itself that is being passed is still a value - a value that contains a memory address
