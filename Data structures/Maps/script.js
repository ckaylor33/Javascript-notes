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

// Maps - a lot more useful than sets!
// data structure we can use to map values to keys
// in maps the keys can have any type unlike objects

const rest = new Map(); // easiest way to create map is to do it empt at first
rest.set('name', 'Classico Italiano'); // use set method to add into the map
// pass in two arguments - key name and then the value
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal'); // two locations for the restaurant
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set(`open`, 11)
  .set('close', 23)
  .set(true, 'We are open! :)')
  .set(false, 'We are closed! :(');
// calling the set method will return the new set
// on that set we can call set again to keep adding to the new set

// in order to read data from a map we use the get method
console.log(rest.get('name'));
console.log(rest.get(true)); // reads the key names
console.log(rest.get(1)); // getting the correct type for the key name matters

const time = 3;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// maps to the true or false outcome of the statement and returns either the true or false value in the map

console.log(rest.has('categories')); // checks for different key names
rest.delete(2); //deletes key name 2
// rest.clear(); //deletes all of the map
rest.set([1, 2], `Test`);
rest.set(document.querySelector('h1'), 'Heading'); // can also use DOM elements
console.log(rest);
console.log(rest.size); // returns number of items

console.log(rest.get([1, 2])); // doesn't return test
// the two arrays are not the same object even though we wrote them in the same way
// not the same object in the heap
// would have to create a new arr first and then add that arr into the map; example:
// const arr = [1,2];
// rest.get(arr, `Test`);
// console.log(rest.get(arr));
// this would then refer to the same place in memory

// Different way to implement a map
const question = new Map([
  ['question', `What is the best programming language in the world?`],
  [1, `C`],
  [2, `Java`],
  [3, `Javascript`],
  [`correct`, 3],
  [true, `Correct 🎉`],
  [false, `Try again!`],
]);
console.log(question);

// same sort of structure - arrays within arrays when you call Object.entries
// convert object to map
console.log(Object.entries(restaurant.openingHours));
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);
// good when you need a map and you already have an object

// iteration - when looping over object:
for (const opening of Object.entries(restaurant.openingHours)) {
  console.log(opening);
}

//Quiz app
// iteration - looping over maps
console.log(question.get(`question`));
for (const [key, value] of question) {
  if (typeof key === `number`) console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt(`Your answer`));
const answer = 3;

console.log(answer);

console.log(question.get(question.get(`correct`) === answer));
// this gets the answer from the prompt and plugs it in to the question map to return the true or false value

// how to convert a map back to an array?
console.log([...question]);
// unpack the map using the spread operator

//also the methods you have for arrays in case you need them
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
//still have to use spread
