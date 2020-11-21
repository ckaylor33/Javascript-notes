'use strict';

// Which data structure to use?

// SOURCES OF DATA
// From the program itself: Data written directly in source code
// From the UI: Data input from the user or data written in DOM (e.g tasks in todo app, expenses in budget app)
// From external sources: Data fetched for example from web API (e.g recipe objects, weather, natural events, movies, currency conversion, etc) - most common source of data in modern applications
// We then need to store collections of data - data structures, database

// SIMPLE LIST?
// Array or set
// Values without description
// Use arrays when you need to store values in order or the values might contain duplicates, need to manipulate data
// Use sets when you need to work with unique values, when high-performance is really important, to remove duplicates from arrays
// Operations like searching for an item or deleting an item from a set can be up to 10 times faster in sets than in arrays

// KEY/VALUE PAIRS?
// Objects or Maps
// With key value pairs we have a way to describe the value
// Objects are a more traditional key/value store, easier to write and access values with . and []
// Use objects when you need to include functions (methods) - use the this keyword to access properties of the same object which is impossible in maps, and when working with JSON (can convert to map)
// Maps have better performance, keys can have any data type in maps, easy to iterate, and easy to compute size
// Use maps when you simply need to map key to values and when you need keys that are not strings

// APIs
// data from web APIs usually come in JSON data format - just string but can be converted into JS object because it uses the same formatting - key value pairs essential here
// You will get objects and arrays mixed in. Example: a list of recipes held together in an array - array of objects

// OTHER DATA STRUCTURES
// Built into JS: WeakMap, WeakSet
// Non-built in: Stacks, queues, linked lists, trees, hash tables
