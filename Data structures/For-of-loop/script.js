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

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
//loops over entire array, each iteration gives access to the current array element - this case we called it item - each element is then logged one by one to the console

// what if we need current index as well?
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
// takes the index and creates a menu
//this give index as well
// console.log([...menu.entries()]);

// can create the menu using destructuring instead
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
} // has the same result as above
