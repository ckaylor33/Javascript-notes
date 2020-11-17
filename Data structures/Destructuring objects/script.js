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
    order: function (starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
  },

  orderDelivery: function ({
    //can give default values as we destructure in case the properties aren't there
    starterIndex = 1,
    address,
    mainIndex = 0,
    time = `20:00`,
  }) {
    //we immediately destructure the data from the object below - these names need to match exactly as they are below. The properties and index don't have to match the order in which we destructure though
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  // passed in the data here and you get the data destructured above and accessible. This is then passed into the string. This is only one object that then gets passed into the function
  time: `22:30`,
  address: `Via del Sole, 21`,
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: `Via del Sole, 21`,
  starterIndex: 1, //this creates a second string where the default values given above have to be used
});

const { name, openingHours, categories } = restaurant; //creates three new variables based on the restaurant object
console.log(name, openingHours, categories);
// very useful when dealing with API calls

const {
  //able to give new variable names without changing the data
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
//very helpful when dealing with third party data
console.log(restaurantName, hours, tags);
// can also give default values in case we're trying to read a property value that doesn't exist on the object

//default values
const { menu = [], starterMenu: starters = [] } = restaurant; //gives empty array as default for menu, while returning starterMenu as it does exist
// without the default we'd get undefined for menu
console.log(menu, starters);

// mutating objects
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // has to be done like this because of a & b being declared outside as let as well
console.log(a, b);

//nested objects
const {
  fri: { open: o, close: c }, // this accesses the nested properties and then mutates them
} = openingHours;
console.log(o, c); //this still returns 11, 23
