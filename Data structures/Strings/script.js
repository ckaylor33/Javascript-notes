'use strict';

// STRINGS PART 1

const airline = 'British Airways';
const plane = 'A320';

console.log(plane[0]);
console.log(`B737`[0]);
// both work the same and return first character of the string
console.log(airline.length);
console.log(`B737`.length);
// both work the same returning length of string

// Methods

console.log(airline.indexOf('r'));
// returns first occurrence of r
console.log(airline.lastIndexOf('r'));
// returns last occurrence of r
console.log(airline.indexOf(`British`));
// this is case sensitive

// one good use case - extract part of a string using SLICE method
// slice method needs index as arguments so useful to figure out index position before extracting
console.log(airline.slice(0, 7));
// first argument the starting position, second the finsihing position
// these methods will always return a new string

// can we extract the first word without knowing the index?
console.log(airline.slice(0, airline.indexOf(` `)));
// this extracts the first word without knowing the index positions
console.log(airline.slice(airline.lastIndexOf(` `) + 1));
// the + 1 gets rid of the space as it's included

console.log(airline.slice(-2));
// this negative argument starts extracting from the end of the string
console.log(airline.slice(1, -1));
// -1 here will chop off last character

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log(`This is a middle seat 😫`);
  } else {
    console.log(`You got lucky 🥳`);
  }
};

checkMiddleSeat(`11B`);
checkMiddleSeat(`23C`);
checkMiddleSeat(`3E`);

// why do strings have methods?
// JS converts the string primitive to a string object to use the method on; it does this behind the scenes. This process is called boxing.
// the object is then converted back to a primitive string when the operation finishes
