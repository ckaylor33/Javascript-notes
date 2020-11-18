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
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

// spread operator
// can use to expand an array into all it's elements - unpacking all the array elements at once

const arr = [7, 8, 9]; //how could we add more elements to the front of the array?
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; //bad solution
console.log(badNewArr);

const newArr = [1, 2, ...arr]; // gives same result as above
//takes all the values out of the arr array, then writes them individually into the array as if we wrote them manually
// if we wrote [1, 2, arr] instead it would have the arr array inside the newArr
// can use the spread operator whenever we would otherwise write multiple values seperated by commas
console.log(newArr);
console.log(...newArr); //breaks newArr down into individual elements
// second useful situation for spread operator is passing arguments into functions

const newMenu = [...restaurant.mainMenu, `Gnocci`];
console.log(newMenu);

// use cases for spread - create shallow copies of arrays and merge two arrays together

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays or more
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// iterables: arrays, strings, sets, maps. NOT objects
const str = 'Charlie';
const letters = [...str, `'`, `s.`];
console.log(letters);
console.log(...str);

//real-world example
const ingredients = [
  //   prompt(`Let's make pasta! Ingredient 1?`),
  //   prompt(`Ingredient 2?`),
  //   prompt(`Ingredient 3?`),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// Objects - copies objects (shallow)
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: `Mario` };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant }; // copies the object
restaurantCopy.name = `Ristorante Roma`; // gives different name
console.log(restaurantCopy.name);
console.log(restaurant.name);
