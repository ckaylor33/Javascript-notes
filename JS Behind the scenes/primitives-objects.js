"use strict";
// primitives vs objects

// primitive
let age = 29;
let oldAge = age;
age = 30;
console.log(age); // 30
console.log(oldAge); // this would be 29 as set before redefining the age variable

// object
const me = {
  name: `Charlie`,
  age: 29,
};
const friend = me;
friend.age = 22;
console.log(`friend:`, friend);
console.log(`Me:`, me); // also now has age of 22

// primitives stored in callstack
// - primitive types
// - identifier in the callstack points to the address in memory
// - value at mememory address is immutable - cant be changed
// - new piece of memory created for primitive example above

//objects (arrays, functions, etc) stored in the heap
// - reference types
// - points to new piece of memory in the stack - which in turn points to memory address in the heap
// - objects might be too large to store in the stack - stored in heap instead with the stack keeping a reference to it
// - friend identifier points to same address as the me identifier
// - this address contains the reference which points to the object in the heap
// - this means the friend object is exactly the same as the me object
// - also means the const can be changed when on a reference value - is only immutable on primtive values

// primitive types
let lastName = `Kaylor`;
let oldLastName = lastName; // kaylor = oldLastName
lastName = `Power`; // power = lastName
console.log(lastName, oldLastName);

//object/reference types
const jessica = {
  firsName: `Jessica`,
  lastName: `Williams`,
  age: 28,
};
const marriedJessica = jessica; // the const here is the value in the stack, which is the reference pointing to the object in the heap - changing something in the heap has nothing to do with const or let variables
marriedJessica.lastName = `Davis`;
console.log(`Before marriage:`, jessica); // same as after marriage
console.log(`After marriage:`, marriedJessica); //same as before marriage
// Davis gets added to the original jessica object
// If we tried to change the object/assign a new object to it, we couldnt do it either. Different to just changing a property of the object.

// Instead we can completely copy the object
const jessica2 = {
  firsName: `Jessica`,
  lastName: `Williams`,
  age: 28,
  family: [`Alicia`, `Bobby`],
};

const jessicaCopy = Object.assign({}, jessica2); // this creates a new object where all the properties are copied
// this technique only works on the first level though, if we have an object inside an object it won't work - the inner object would still point to the same place in memory - creates a shallow copy not a deep clone
jessicaCopy.lastName = `Davis`;
console.log(`Before marriage:`, jessica2); // Williams
console.log(`After marriage:`, jessicaCopy); // Davis

jessicaCopy.family.push(`Mary`); // we're trying to manipulate an object within an object
jessicaCopy.family.push(`Johnny`);

console.log(`Before marriage:`, jessica2); // both objects now have 4 members
console.log(`After marriage:`, jessicaCopy); // showing shallow clone of Object.assign
// deep clone you'd use an external library like lodash
