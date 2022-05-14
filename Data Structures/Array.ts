/** ------- CREATION  ------- **/
// The simple way to create an array
let numbers: number[] = [1, 2, 3, 4]
let names: string[] = ['Snake', 'Ocelot', 'Otacon', 'Naomi']

// Also can be written using a generic array type, Array<elemType>
let numbersArray: Array<number> = [1, 2, 3, 4]
let namesArray: Array<string> = ['Snake', 'Ocelot', 'Otacon', 'Naomi']

// Fill function allows you to fill an array with a value
const zeros = new Array(5).fill(0);

// Fill with a range of numbers
//In ES6 using Array from() and keys() methods.
(Array.from(Array(10).keys())); //=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//Shorter version using spread operator.
([...Array(10).keys()]) //=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//Start from 1 by passing map function to Array from(), with an object with a length property:
Array.from({length: 10}, (_, i) => i + 1) //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let array = []

/** ------- ITERATION  ------- **/
for(let i=0; i<array.length; i++) {
    console.log(array[i])
}
for(let item of array) {
    console.log(item)
}
array.forEach(item => {
    console.log(item)
})


/** ------- INSERTION  ------- **/
array.push(5) // Add to the end
array.unshift(0) // Add to the beginning
array.splice(3, 0, "NEW") // Add in a specific index position(3) and remove 0 items


/** ------- DELETION  ------- **/
array.pop() // Remove and returns first element from the end
array.shift() // Remove and returns first element from the beginning
array.splice(2, 1) // Remove and returns from a specific index position(2) the amount of elements(1)


/** ------- UPDATE  ------- **/
array[1] = 7 // Update element in position 1
array.reverse(); // reverses the order of the elements in the array (overwrites it)
array.sort((a, b) => a-b ) // Sort numbers in ascending order (Without arguments sorts the elements as strings in alphabetical and ascending order)


/** ------- FIND  ------- **/
var item = array.find(item => item === 3)  // Find the first item with value 3 or undefined
var index = array.findIndex(item => item > 18) // Find the index of first item with a value over 18 or -1
const items = array.filter(item => item >= 18); // Return an array of all values that are 18 or over
const partialArray = array.slice(1,3) // Return an array starting at index 1 until the index 3 -> [2nd, 3rd] items


/** ------- EXTRA  ------- **/
// Map
// Returns a new array from calling a function for every array element
const newArray = array.map((num)=>num*10)
const newArray2 = array.map((num, index, array)=>{return {value:num, index, array}}) 

// Reduce 
// Returns a single value: the function's accumulated result. Calculates it for every array element
const totalSum = array.reduce((total,currentValue,currentIndex,array)=>total+currentValue,0)
const uniqueSet = array.reduce((dictionary,currentValue)=> new Set([...dictionary, ...currentValue.words]),[])
const totalSum2 = array.reduceRight((total)=>total++,0) // Reversed order (starting from the end)

// Some
// Returns true if any of the elements of an array passes a test (provided as a function), else false.
const itExists = array.some((value, index, array)=>value==="Juan")

// Every
// Returns true if all of the elements of an array passes a test (provided as a function), else false.
const isEverybodyAdults = array.every((value, index, array)=>value>=18)

// Concatenate
let part2 = ['four', 'five'];
let part1 = ['one', 'two', 'three'];
const concatedArray = part1.concat(part2);
const concatedArray2 = [...part1, ...part2];