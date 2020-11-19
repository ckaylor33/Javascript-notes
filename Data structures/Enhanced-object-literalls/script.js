'use strict';

const weekdays = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];
// can compute property names instead of having to write them out manually and literally
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // openingHours: openingHours, //before ES6 to bring the openingHours object into the restaurant object
  // problem is the variable name is now the same as the property name
  // with enhanced object literals you don't need to write this

  //ES6 enhanced object literal
  openingHours, //can write like this - does the same as above

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }, // can write methods like this, doesn't have to have a proeprty attached
};
console.log(restaurant);
// the restaurant is an object literal
