'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Sets
const ordersSet = new Set([
  `Pasta`,
  `Pizza`,
  `Pizza`,
  `Risotto`,
  `Pasta`,
  `Pizza`,
]);
console.log(ordersSet);
// removes the duplicates
// sets also iterables

console.log(new Set('Charlie'));

console.log(ordersSet.size);
// use size instead of length for sets

console.log(ordersSet.has(`Pizza`)); // true
console.log(ordersSet.has(`Bread`)); // false

ordersSet.add(`Garlic Bread`);
ordersSet.add(`Garlic Bread`);
ordersSet.delete(`Risotto`); // risotto deleted
// ordersSet.clear(); // deletes the whole set
console.log(ordersSet); // added garlic bread to the set - only one added though

// How do we retrieve data out of a set?
// No index in set, no way of getting value out of a set
// All we need to know is whether a certain value is in the set or not

for (const order of ordersSet) console.log(order); // loops over the set

// Example; main use case for sets is to remove deuplicate values in arrays
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// what if we only want to know what different types of poisition we have?
const staffUnique = [...new Set(staff)]; // converts the new set into an array with the spread operator
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
// returns 3 as it's returning the set
// the way to go if you just want to know how many unique positions there are

// same could be done with counting how many letters there are in a string
console.log(new Set(`Charliesthemanyeayea`).size);
// returns 12 - unique letters
