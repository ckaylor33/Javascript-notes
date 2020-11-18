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

// Short circuiting (&& and ||)
console.log(`----OR----`);

// Use ANY data type, return ANY data type, short-circuiting/short circuit evaluation

// short-circuiting with || operator - if first value is a truthy value then immediately return that first value - the other value won't even be evaluated by JS
console.log(3 || `Charlie`); // returns 3
console.log(`` || `Charlie`); // returns Charlie
console.log(true || 0); // returns true
console.log(undefined || null); // returns null

console.log(undefined || 0 || `` || `Hello` || 23 || null);
// returns `hello` as it's the first truthy value in the order of operations

// restaurant.numGuests = 23; - if added to code this would result in the below ternary and || operator returning 23 instead of 10. If value of numGuests = 0 the below solutions wouldn't work, as 0 is a falsey value
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); //numGuests doesn't exist so 10 will be the result of the ternary operator

const guests2 = restaurant.numGuests || 10;
console.log(guests2); // returns 10 as default as numGuests doesn't exist

console.log(`----AND----`);
console.log(0 && `Charlie`); // returns 0 - short circuits when the first value is falsey
console.log(7 && `Charlie`); // returns Charlie - when truthy the evaluation continues and the last value is returned

console.log(`Hello` && 23 && null && `Charlie`);
// null falsey so it returns null

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza(`mushrooms`, `spinach`);
}
// can use && operator instead of if statement
restaurant.orderPizza && restaurant.orderPizza(`mushrooms`, `spinach`);
// returns null as orderPizza isn't there - if it was then this replaces the if statement as all of the values would be true

//Nullish Coalescing Operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // now get 0 - real value for numGuests
// Nullish works with the idea of knowledge values instead of falsey
// Nullish values are null and undefined - that's it!
// Does not include 0 or empty string
