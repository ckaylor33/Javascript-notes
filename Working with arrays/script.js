'use strict';

// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// ARRAY METHODS //

// SLICE ////////////////////
// let arr = [`a`, `b`, `c`, `d`, `e`];
// console.log(arr.slice(2)); // does not mutate original arr array - simply creates a copy of arr with the extracted parts
// console.log(arr.slice(2, 4)); // first parameter is where the first index is, the second is where the last index will be - end parameter not included in the output
// console.log(arr.slice(-2)); // negative starts at the end; -2 would take the last two elements
// console.log(arr.slice(1, -2)); // starts extracting at position 1, and extracts everything except the last two elements
// console.log(arr.slice()); // creates a shallow copy of the entire array, can do the same thing with the spread operator;
// console.log([...arr]); // same result as above

// // SPLICE //////////////////
// // Does change the original array unlike slice
// // console.log(arr.splice(2));
// arr.splice(-1); // removes last element
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr); // extracted elements from splice gone from the original array
// // most of the time the value the splice method returns doesn't interest us - all we are usually interested in is to delete one or more elements from the array using splice - one common use case is to remove the last element from the array
// // second parameter is delete count, how many elements you wish to delete

// // REVERSE //////////////////
// arr = [`a`, `b`, `c`, `d`, `e`];
// let arr2 = [`j`, `i`, `h`, `g`, `f`];
// console.log(arr2.reverse()); // reverse mutates the original array
// console.log(arr2);

// // CONCAT /////////////////
// const letters = arr.concat(arr2);
// console.log(letters);
// // brings together two arrays
// console.log([...arr, ...arr2]);
// // could also do this - same result and both do not mutate

// // JOIN /////////////////
// console.log(letters.join(' - '));
// string with letters specified

//forEACH //////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log(`--------forEach--------`);
// // How to achieve same thing with forEach
// // receives current element of the array as an argument - named movement below
// movements.forEach(function (mov, i, arr) {
//   // first parameter needs to be current element
//   // second the current index
//   // third the entire array we're looping over
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

// how forEach works
// 0: function(200)
// 1: function(450)
// 2: function(400)
// in each iteration we tell forEach what it should be doing - logging a particular string to the console in this case

// one difference between the two loops - cannot break out of a forEach loop
// continue and break statements don't work at all in forEach
// will always loop over the entire array

// MAP ////////////////////////////
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // SET //////////////////////
// const currenciesUnique = new Set([`USD`, `GBP`, `USD`, `EUR`]);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, set) {
//   console.log(`${value}: ${_}`);
// });
// second paramater for forEach is the same as the first - as sets don't have keys

// Coding Challenge #1 ////////////////////////////

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

//SOLUTION 1 //
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// console.log([...dogsJulia]);

// const checkDogs = function () {
//   dogsJulia.splice(0, 1);
//   dogsJulia.splice(-2);
//   const bothDogs = [...dogsJulia, ...dogsKate];
//   bothDogs.forEach(function (value, i) {
//     console.log(
//       `Dog number ${i + 1} is an ${
//         value > 2 ? 'adult' : 'puppy'
//       }, and is ${value} years old.`
//     );
//   });
// };
// checkDogs();

//SOLUTION 2 //
// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   // dogsJulia.slice(1, 3);
//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   console.log(dogs);
//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     }
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// MAP /////////////////////////////////
// const eurToUsd = 1.1;
// const movementsUSD = movements.map(mov => mov * eurToUsd);
// console.log(movements); // original array not mutated
// console.log(movementsUSD); // ne figures returned into a new array

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor); // does the same as the map method above

// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'withdrew' : 'deposited'} ${Math.abs(
//       mov
//     )}`
// );
// // map method that calls this function for each of the movements array elements
// // same params as forEach; element, index and array
// console.log(movementsDescriptions);

// FILTER ///////////////////////////////
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);
// // instead of using the for of loop below, it's useful to be able to chain methods together to build a final result - impossible using the for loop

// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// REDUCE /////////////////////////////////
// accumulator -> SNOWBALL / total that keeps getting added to
// console.log(movements);
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
// reduce has a second parameter - the initial value of the accumulator in the first iteration - represented by 0 above as we want to start at 0
// in each loop iteration, we return the updated accumulator plus the new current value - we can then keep adding to the acc with the next iteration
// const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);
// // boiled down to one number at the end

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// // Maximum value of an array
// // When boiling down the array into a single value - it could be whatever we want it to be; mult, string, obj, etc.
// // What do you want the accumulator to be and how should it interact with the current value?
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);

// Coding Challenge #2 ///////////////////////////

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// SOLUTION ///////////////////////////////////
// const calcAverageHumanAge = function (ages) {
//   //calc age
//   const ageCalc = ages.map(dogAge =>
//     dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
//   );
//   console.log(ageCalc);
//   // filter out dogs under 18
//   const filterDogs = ageCalc.filter(humAge => humAge >= 18);
//   console.log(filterDogs);
//   // work out average age in human years
//   const aveHumanLife =
//     filterDogs.reduce((acc, humAge) => acc + humAge, 0) / filterDogs.length;
//   console.log(aveHumanLife);
//   return aveHumanLife;
// };

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// console.log(avg1, avg2);

// // PIPELINE - CHAINING /////////////////////
// const eurToUsd = 1.1;
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);
// // can chain these methods as long as they return a new array - can do this with filter and map, not reduce as it returns a value

// Coding Challenge #3 //////////////////////////
/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = function (ages) {
//   const ageCalc = ages
//     .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
//     .filter(humAge => humAge >= 18)
//     .reduce((acc, humAge, i, arr) => acc + humAge / arr.length, 0);
//   return ageCalc;
// };
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// console.log(avg1, avg2);

// FIND METHOD ///////////////////////////////
// finds an element in an array
// uses a callback function to return a boolean
// returns the first element in the array that satisfies this condition
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// const account = accounts.find(acc => acc.owner === `Jessica Davis`);
// console.log(account);

// for (const acc of accounts) {
//   if (acc.owner === `Jessica Davis`) {
//     console.log(acc);
//     break;
//   }
// }
// same result as above find method above

// SOME AND EVERY //////////////////////////////
// Similar to includes method - tests for equality
// EQUALITY
// console.log(movements);
// console.log(movements.includes(-130));

// // SOME - CONDITION
// console.log(movements.some(mov => mov === -130)); // same as above includes method
// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);

// // EVERY
// // Only true if all elements in the array satisfy the condition
// console.log(movements.every(mov => mov > 0)); // false
// console.log(account4.movements.every(mov => mov > 0)); // true

// // SEPARATE CALLBACK
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));
// // better for dry principle

// FLAT AND FLATMAP //////////////////////////////////
// FLAT - one level deep by default
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[[1, 2], 3], [4, [5, 6]], 7, 8]];
// console.log(arrDeep.flat(3)); // param to specify how deep you want to go...

// // FLAT
// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// // FLATMAP
// // only goes one level deep and cannot be changed
// const overallBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance2);

// SORTING ARRAYS
// STRINGS
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort()); // alphabetically
// console.log(owners); // orignal array mutated
// // NUMBERS
// console.log(movements);
// // console.log(movements.sort()); // sort converts everything to strings and then sorts by default

// // ASCENDING ORDER SORT
// // return < 0, A, B (keep order)
// // return > 0, B, A (switch order)
// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (a < b) return -1;
// // });
// movements.sort((a, b) => a - b); // same as above
// console.log(movements);

// // DESCENDING ORDER SORT
// // movements.sort((a, b) => {
// //   if (a > b) return -1;
// //   if (a < b) return 1;
// // });
// movements.sort((a, b) => b - a); // same as above
// console.log(movements);

// // WAYS OF CREATING AND FILLING ARRAYS
// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// // EMPTY ARRAYS + FILL METHOD
// const x = new Array(7); // creates new array with 7 empty elements
// console.log(x);
// // console.log(x.map(() => 5)); // nothing happens
// // console.log(x.fill(1)); // this does work, mutates array
// x.fill(1, 3, 5); // first the value of the elements, second parameter determines where it starts to fill, third where it ends
// console.log(x);

// arr.fill(23, 4, 6); // also works for arrays already full
// console.log(arr);

// // Array.from function
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// // function in above is like the callback function when calling map on emtpy array, you get the current element and the index
// console.log(z);

// // Random dice roll
// const d = Array.from({ length: 100 }, () => Math.trunc(Math.random() * 6 + 1));
// console.log(d);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);
// });

// WHICH METHOD TO USE?

// Mutate the array? //
//  Add to original:
// - .push (end)
// - .unshift (start)
// Remove from original:
// - .pop (end)
// - .shift (start)
// - .splice (any)
// Others:
// - .reverse
// - .sort
// - .fill

// New array? //
// Computed from original:
// - .map (loop)
// Filtered using condition:
// - .filter
// Portion of original:
// - .slice
// Adding original to other:
// - .concat
// Flattening  original:
// - .flat
// - .flatMap

// Array index?
// Based on value:
// - .indexOf
// Based on test condition:
// - .findIndex

// Array element?
// Based on test condition:
// - .find

// Know if array includes? - Good for if else statements //
//  Based on value:
// - .includes
// Based on test condition:
// - .some
// - .every

// Transform to value?
// Based on accumulator:
// - .reduce (boil down array to single value of any type: number, string, boolean, or new array or object)

// To loop array?
// Based on callback:
// - .forEach (Does not create a new array, just loops)

// New string?
// Based on seperator string:
// - .join

// Coding Challenge #4

// //
// Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
// Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
// 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

// HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
// HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

// TEST DATA:
// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// // 1.
// dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
// console.log(dogs);

// // 2.
// const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
// console.log(dogSarah);
// console.log(
//   `Sarah's dog is eating too ${
//     dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
//   }`
// );

// // 3.
// const ownersEatTooMuch = dogs
//   .filter(dog => dog.curFood > dog.recFood)
//   .flatMap(dog => dog.owners);
// console.log(ownersEatTooMuch);

// const ownersEatTooLittle = dogs
//   .filter(dog => dog.curFood < dog.recFood)
//   .flatMap(dog => dog.owners);
// console.log(ownersEatTooLittle);

// // 4.
// // "Matilda and Alice and Bob's dogs eat too much!"
// // "Sarah and John and Michael's dogs eat too little!"
// console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
// console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// // 5.
// console.log(dogs.some(dog => dog.curFood === dog.recFood));

// // 6.
// // current > (recommended * 0.90) && current < (recommended * 1.10)
// const checkFoodOk = dog =>
//   dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
// console.log(dogs.some(checkFoodOk));

// // 7.
// console.log(dogs.filter(checkFoodOk));

// // 8.
// const dogsCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);
// console.log(dogsCopy);
