'use strict';

function calcAge(birthYear) {
  const age = 2020 - birthYear;
  function printAge() {
    let output = `${firstName}, you are ${age} years old, born in ${birthYear}.`;
    // Goes to parent scope to find age and birthYear variable
    // firstName also accessible, goes into function scope, then global scope to find
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = `Jeff`;
      const str = `Oh, and you're a millenial, ${firstName}!`;
      // would log firstName as Jeff - first looks for the variable inside the scope chain, when it finds it, it won't look up the chain
      // in the printAge function up the chain where firstName is also used in a string - Charlie would be logged
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = `NEW OUTPUT`;
    }
    // console.log(str); // const block scoped - not accessible
    console.log(millenial); // accessible: pre ES6 var function scoped
    // add(2, 2); // can't access as functions are block scoped as well in strict mode
    // if strict mode off add would be called
    console.log(output); // manipulate/re-define variable inside a child scope - accessed from the parent scope
  }
  printAge();
  return age;
}

const firstName = `Charlie`;
calcAge(1991);
// console.log(age); // can't access this childscope variable
// printAge(); can't access this either

// add and remove any of these variables to play around with scope
