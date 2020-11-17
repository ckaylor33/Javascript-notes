'use strict';

//destructuring - a way of unpacking values from an array or object into seperate variables - breaking a complex data structure down into a smaller data structure
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

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

let [main, , secondary] = restaurant.categories; // second element skipped and second becomes third element
console.log(main, secondary);

// Recieve two return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested array
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested; // nested destructuring
console.log(i, j, k);

// Default values
// const [p, q, r] = [8, 9]; //trying to read something that doesn't exist - undefined
const [p = 1, q = 1, r = 1] = [8]; // r & q become 1 instead of undefined
// can be useful when getting data from an API
console.log(p, q, r);

// Switching variables
//if we wanted to swap the main and secondary without destructuring:
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//with destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary); // a lot easier doing it this way

// without destructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// with destructuring
const [x, y, z] = arr; // when JS sees this on the left side of the = sign, it knows to destructure - must always declare the variables using const
console.log(x, y, z); // logs 2, 3, 4
console.log(arr); //doesn't destroy the array just unpacks it
