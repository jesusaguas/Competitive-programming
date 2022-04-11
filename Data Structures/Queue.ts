/* 
---------- QUEUE ----------
A Queue is a collection of elements, supporting two principle operations: 
ENQUEUE, which inserts an element into the queue, and DEQUEUE, which removes an element from the queue

First in, first out data structure (FIFO): the oldest added object is the first to be removed

Time Complexity:
- Access: O(n)
- Search: O(n)
- Insert: O(1)
- Remove: O(1)
*/

// Create Queue
let queue = []

// Add item, enqueue
queue.push(5) 

// Get item, dequeue
var item = queue.shift() 