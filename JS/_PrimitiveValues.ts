/*
In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods. 
There are 7 primitive data types: 
string, number, bigint, boolean, undefined, symbol, and null.

All primitives are immutable, i.e., they cannot be altered. 
It is important not to confuse a primitive itself with a variable assigned a primitive value. 
The variable may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered.
*/

// This example will help you understand that primitive values are immutable.

// Using a string method doesn't mutate the string
var bar = "baz";
console.log(bar);               // baz
bar.toUpperCase();
console.log(bar);               // baz

// Using an array method mutates the array
var foo = [];
console.log(foo);               // []
foo.push("plugh");
console.log(foo);               // ["plugh"]

// Assignment gives the primitive a new (not a mutated) value
bar = bar.toUpperCase();       // BAZ


// A primitive can be replaced, but it can't be directly altered.