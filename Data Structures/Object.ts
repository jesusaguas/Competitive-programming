/* 
---------- OBJECT ----------
A Linked List is a linear collection of data elements, called nodes, each pointing to the next node by means of a pointer. 
It is a data structure consisting of a group of nodes which together represent a sequence.

- Singly-linked list: linked list in which each node points to the next node and the last node points to null
- Doubly-linked list: linke
*/


/** ------- CREATION  ------- **/
const obj: any = {}
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};


/** ------- ITERATION  ------- **/
for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
}
  

/** ------- INSERTION && UPDATE  ------- **/
obj.age = 34;
obj["phone"] = "65345632"


/** ------- DELETION  ------- **/
delete obj.age; // Value of age is now undefined


/** -- EXTRA -- */
// Object destructuring: 
const { firstName: property1 } = person

// Combine objects
Object.assign(obj, person, {'newprop':'hello World'}) // obj has all the props
let combinedObj = {...obj, ...person}

// Shallow copy
let copiedPerson1 = Object.assign({}, person); // Nested properties are still connected to the original object (person.location.city)

// Deep copy
let copiedPerson2 = JSON.parse(JSON.stringify(person)); // Total disconnection from original object