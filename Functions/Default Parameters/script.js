'use strict';

// DFEAULT PARAMETERS
// Do not have to pass them in manually if we don't want to change the default

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers // only works for parameters defined in the list before this one
) {
  // both ES5 way of setting default values
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5); // dynamically calculated price

// cannot skip parameters - can't skip numPassengers and then define price:
createBooking('LH123', undefined, 1000);
// we have to set the numPassengers to undefined if we wanted to leave it to the default value
