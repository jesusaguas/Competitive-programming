/** ------- NUMBER  ------- **/
/*
JavaScript Numbers are Always 64-bit Floating Point
Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.
*/
let num = 5;

// Rounding numbers
Math.round(3.14159)  // 3 - Rounds to the nearest integer (if the fraction is 0.5 or greater - rounds up)
Math.round(3.5)      // 4
Math.floor(3.8)      // 3 - Rounds down
Math.ceil(3.2)       // 4 - Rounds up

3.14159.toFixed(2);              // 3.14 returns a string
parseFloat(3.14159.toFixed(2));  // 3.14 returns a number

/* We can use bitwise operators to accomplish this task. 
Unfortunately there are some restriction as well. 
All bitwise operations work on signed 32-bit integers.
Using them converts a float to an integer. 
In practice it means that we can safely work up to 2^31−1 (2 147 483 647)
*/
3.14159 | 0;   //  3
-3.14159 | 0;  // -3
3000000000.1 | 0  // -1294967296 Ups :(

// INFINITE and -INFINITE
const infinity = 2/0 || Infinity
Number.MAX_VALUE // 1.7976931348623157 * (10^308)
Number.MIN_VALUE // 2^-1074
Number.MAX_SAFE_INTEGER // 2^53 o 10^15
Number.MIN_SAFE_INTEGER // -2^53 o -10^15

// NaN
// NaN is a JavaScript reserved word indicating that a number is not a legal number.
//let nan = 100 / "Apple";  // NaN
//isNaN(100 / "10") // false

// Operations with decimals
// The maximum number of decimals is 17.
// Be careful, Floating point arithmetic is not always 100% accurate:
0.2 + 0.1 // 0.30000000000000004
// The solution for this is to round the result with Math.round() and some tricks for the decimals
Math.round(num * 100) / 100
//Or to be more specific and to ensure things like 1.005 round correctly, use Number.EPSILON :
Math.round((num + Number.EPSILON) * 100) / 100
