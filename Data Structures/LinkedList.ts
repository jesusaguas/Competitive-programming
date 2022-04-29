/* 
---------- LINKED LIST ----------
A Linked List is a linear collection of data elements, called nodes, each pointing to the next node by means of a pointer. 
It is a data structure consisting of a group of nodes which together represent a sequence.

- Singly-linked list: linked list in which each node points to the next node and the last node points to null
- Doubly-linked list: linked list in which each node has two pointers, p and n, such that p points to the previous node and n points to the next node; the last node's n pointer points to null
- Circular-linked list: linked list in which each node points to the next node and the last node points back to the first node

Time Complexity:
- Access: O(n)
- Search: O(n)
- Insert: O(1)
- Remove: O(1)
*/


// Singly linked list - Each node has only a pointer to the next node.

export class Node<T> {
    data: T;
    next: Node<T> | null = null;
  
    constructor(data: T) {
      this.data = data;
    }
}
  
class LinkedList<T> {
    head: Node<T> | null = null;
    comparator: (a: T, b: T) => boolean;

    constructor(comparator: (a: T, b: T) => boolean) {
    this.comparator = comparator;
    }

    append(data: T): void {
    if (!this.head) {
        this.head = new Node(data);
    } else {
        let current = this.head;
        while (current.next != null) {
        current = current.next;
        }
        current.next = new Node(data);
    }
    }

    delete(data: T): void {
    if (!this.head) return;

    // Check if the head node is the node to be removed
    if (this.comparator(this.head.data, data)) {
        this.head = this.head.next;
        return;
    }

    let current = this.head.next;
    let previous = this.head;

    /**
     * Search for the node to be removed and keep track of its previous node
     *
     * If it were a double linked list, we could simply search the node
     * and it would have a pointer to the previous node
     **/
    while (current) {
        if (this.comparator(current.data, data)) {
        current = null;
        } else {
        previous = current;
        current = current.next;
        }
    }

    /**
     * set previous.next to the target.next, if the node target is not found,
     * the 'previous' will point to the last node,
     * since the last node hasn't next, nothing will happen
     **/
    previous.next = previous.next ? previous.next.next : null;
    }

    search(data: T): Node<T> | null {
    let current = this.head;
    while (current) {
        if (this.comparator(current.data, data)) {
        return current;
        }
        current = current.next;
    }
    return null;
    }

    traverse() {
    let current = this.head;
    while (current != null) {
        console.log(current.data);
        current = current.next;
    }
    }
}