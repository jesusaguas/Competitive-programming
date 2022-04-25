/* 
---------- SET ----------
Set objects are collections of values. 
You can iterate through the elements of a set in insertion order. 
A value in the Set may only occur once; it is unique in the Set's collection.
*/

/** ------- CREATION  ------- **/
const mySet = new Set()
const mySetFromArray = new Set([3,5,6,7,8]) // Use the regular set constructor to transform a 2D key-value Array into a set


/** ------- ITERATION  ------- **/
for (let item of mySet){
    console.log(item)
} 


/** ------- INSERTION  ------- **/
mySet.add("A") // Returns set with a new element 'A'


/** ------- GET  ------- **/
mySet.has('notExists')   // false (True if the element exists)
var size = mySet.size


/** ------- DELETE  ------- **/
mySet.delete('a string') // True if successful, else false
mySet.clear() // Removes all key-value pairs from the Set object