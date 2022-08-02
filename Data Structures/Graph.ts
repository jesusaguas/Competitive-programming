/*
A graph tries to represent how a set of nodes (or vertices) are related (connected) to each other (via edges). 
However, in actual physical device (memory), we have a continuous array of memory cell.

So, in order to represent the graph, we can choose to use a matrix. 
In this case, we use the vertex index as the row and column and the entry has value 1 if the vertices are adjacent to each other, 0 otherwise.

Alternatively, you can also represent a graph by allocating an object to represent the node/vertex which points to a list of all the nodes that are adjacent to it.

The matrix representation gives the advantage when the graph is dense, 
meaning when most of the nodes/vertices are connected to each other. 
This is because in such cases, by using the entry of matrix, it saves us from having to allocate an extra pointer (which need a word size memory) for each connection.

For sparse graph, the list approach is better because you don't need to account for the 0 entries when there is no connection between the vertices.


*/

export class Node<T> {
    data: T;
    adjacent: Node<T>[];
    comparator: (a: T, b: T) => number;
  
    constructor(data: T, comparator: (a: T, b: T) => number) {
      this.data = data;
      this.adjacent = [];
      this.comparator = comparator;
    }
  
    addAdjacent(node: Node<T>): void {
      this.adjacent.push(node);
    }
  
    removeAdjacent(data: T): Node<T> | null {
      const index = this.adjacent.findIndex(
        (node) => this.comparator(node.data, data) === 0
      );
  
      if (index > -1) {
        return this.adjacent.splice(index, 1)[0];
      }
  
      return null;
    }
  }
  
  class Graph<T> {
    nodes: Map<T, Node<T>> = new Map();
    comparator: (a: T, b: T) => number;
  
    constructor(comparator: (a: T, b: T) => number) {
      this.comparator = comparator;
    }
  
    /**
     * Add a new node if it was not added before
     *
     * @param {T} data
     * @returns {Node<T>}
     */
    addNode(data: T): Node<T> {
      let node = this.nodes.get(data);
  
      if (node) return node;
  
      node = new Node(data, this.comparator);
      this.nodes.set(data, node);
  
      return node;
    }
  
    /**
     * Remove a node, also remove it from other nodes adjacency list
     *
     * @param {T} data
     * @returns {Node<T> | null}
     */
    removeNode(data: T): Node<T> | null {
      const nodeToRemove = this.nodes.get(data);
  
      if (!nodeToRemove) return null;
  
      this.nodes.forEach((node) => {
        node.removeAdjacent(nodeToRemove.data);
      });
  
      this.nodes.delete(data);
  
      return nodeToRemove;
    }
  
    /**
     * Create an edge between two nodes
     *
     * @param {T} source
     * @param {T} destination
     */
    addEdge(source: T, destination: T): void {
      const sourceNode = this.addNode(source);
      const destinationNode = this.addNode(destination);
  
      sourceNode.addAdjacent(destinationNode);
    }
  
    /**
     * Remove an edge between two nodes
     *
     * @param {T} source
     * @param {T} destination
     */
    removeEdge(source: T, destination: T): void {
      const sourceNode = this.nodes.get(source);
      const destinationNode = this.nodes.get(destination);
  
      if (sourceNode && destinationNode) {
        sourceNode.removeAdjacent(destination);
      }
    }
  
    /**
     * Depth-first search
     *
     * @param {T} data
     * @param {Map<T, boolean>} visited
     * @returns
     */
    private depthFirstSearchAux(node: Node<T>, visited: Map<T, boolean>): void {
      if (!node) return;
  
      visited.set(node.data, true);
  
      console.log(node.data);
  
      node.adjacent.forEach((item) => {
        if (!visited.has(item.data)) {
          this.depthFirstSearchAux(item, visited);
        }
      });
    }
  
    depthFirstSearch() {
      const visited: Map<T, boolean> = new Map();
      this.nodes.forEach((node) => {
        if (!visited.has(node.data)) {
          this.depthFirstSearchAux(node, visited);
        }
      });
    }
  
    /**
     * Breadth-first search
     *
     * @param {T} data
     * @returns
     */
    private breadthFirstSearchAux(node: Node<T>, visited: Map<T, boolean>): void {
      const queue: Queue<Node<T>> = new Queue();
  
      if (!node) return;
  
      queue.add(node);
      visited.set(node.data, true);
  
      while (!queue.isEmpty()) {
        node = queue.remove();
  
        if (!node) continue;
  
        console.log(node.data);
  
        node.adjacent.forEach((item) => {
          if (!visited.has(item.data)) {
            visited.set(item.data, true);
            queue.add(item);
          }
        });
      }
    }
  
    breadthFirstSearch() {
      const visited: Map<T, boolean> = new Map();
      this.nodes.forEach((node) => {
        if (!visited.has(node.data)) {
          this.breadthFirstSearchAux(node, visited);
        }
      });
    }
  }
  
  function comparator(a: number, b: number) {
    if (a < b) return -1;
  
    if (a > b) return 1;
  
    return 0;
  }
  
  const graph = new Graph(comparator);