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
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// rest pattern and parameters
// rest pattern opposite of the spread operator
// collects multiple elements and condense them into an array

// 1. DESTRUCTURING

// Spread because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
// takes remaining elements of the array and puts them into a new array called others
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays); //puts thu & fri into it's own object, seperates sat

// 2. FUNCTIONS

const add = function (...numbers) {
  // rest arguments
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
}; // this is now a working function that can accept any number of parameters
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 4, 5, 6, 7, 8, 9, 1); // will pack the arguments below into 3 different arrays

const x = [23, 5, 7];
add(...x); // use spread to use the x array as arguments in numbers function

restaurant.orderPizza(`mushrooms`, `olives`, `spinach`, `onions`);
// will be broken into mainIng and otherIng in the orderPizza function
// mushrooms as main
// array of all remaining ingredients

restaurant.orderPizza(`cheese`);
// still has the one main ingredient
// no other arguments so will return empty array for otherIngredients
