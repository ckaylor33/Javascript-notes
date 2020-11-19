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
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// checks to see if mon property exists
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// if it exists return opening hours

// what if we had to check if openingHours exists as well?
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
// this can get out of hand when we have deeply nested objects with lots of properties

// ES2020 solution - WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
// only if mon exists, then the open property will be read
// if not undefined will be returned
// a property exists if it's not null or undefined

// can have multiple optional chaining
console.log(restaurant.openingHours?.mon?.open);
// makes it easy to stop all kinds of bugs in your code

//Example
const weekdays = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];
for (const day of weekdays) {
  const open = restaurant.openingHours[day]?.open ?? `closed`;
  // if we want to use a var name as the property name we use []
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? `Method does not exist`);

console.log(restaurant.orderRosotto?.(0, 1) ?? `Method does not exist`);
// returns undefined and then because of the nullish coelescing operator we go to the second operand

// Arrays
const users = [{ name: `Charlie`, email: `hithere@gmail.com` }];

console.log(users[0]?.name ?? `User array empty`);
// ?. tests if the value on the left exists - which it does here

const users2 = [];
console.log(users2[0]?.name ?? `User array empty`);
// returns user array emtpy

// without optional chaining we would have to write:
if (users.length > 0) console.log(users[0].name);
else console.log(`User array empty`);
