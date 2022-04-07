/* 
---------- STACK ----------
A Stack is a collection of elements, with two principle operations: 
PUSH, which adds to the collection, and POP, which removes the most recently added element.

Last in, first out data structure (LIFO): the most recently added object is the first to be removed

Time Complexity:
- Access: O(n)
- Search: O(n)
- Insert: O(1)
- Remove: O(1)
*/

// Create Stack
let stack = []

// Add item, push
stack.push(5) 

// Get item, pop
var item = stack.pop()