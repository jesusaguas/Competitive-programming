interface INode<U> {
    value: U
    left: INode<U> | null
    right: INode<U> | null
}

export default class BinaryTree<U> {

    private root: INode<U> | undefined
  
    createNewNode = (value: U): INode<U> => {
      return {
        value,
        left: null,
        right: null,
      }
    }
  
    insert = (value: U) => {
      const currentNode = this.createNewNode(value)
      if (!this.root) {
        this.root = currentNode
      } else {
        this.insertIntoCurrentNode(currentNode)
      }
      return this
    }
  
    private insertIntoCurrentNode = (currentNode: INode<U>) => {
      const { value } = currentNode
      const traverse = (node: INode<U>) => {
        if (value > node.value) {
          if (!node.right) {
            node.right = currentNode
          } else traverse(node.right)
        } else if (value < node.value) {
          if (!node.left) {
            node.left = currentNode
          } else traverse(node.left)
        }
      }
      traverse(this.root as INode<U>)
    }


}



class Node {
  data: number;
  left: Node;
  right: Node;
  
  constructor(value: number) {
      this.data = value;
      this.left = null;
      this.right = null;  
  }
}

class Tree {
  root: Node;
  
  constructor() {
      this.root = null;
  }
  
  addToTree = function(node: Node, parent: Node) {
      parent = parent || this.root;
      
      if (parent) {
          if (parent.data > node.data) {
              if (parent.left) {
                  this.addToTree(node, parent.left);
              } else {
                  parent.left = node;
              }
          } else {
              if (parent.right) {
                  this.addToTree(node, parent.right);
              } else {
                  parent.right = node;
              }
          }
      } else {
          this.root = node;
      }
  }
}

function createTree(arr: number[]) {
  let tree = new Tree();
  for (let i = 0; i < arr.length; i++) {
      tree.addToTree(new Node(arr[i]), null);
  }
  return tree;
}

function levelOrderTraversal(a: number[]): number[] {
  // Write your code here
  let tree = createTree(a);
  let queue: any = [];
  let order: number[] = [];
  let node = tree.root;
  queue.push(node);
  while(queue.length) {
      if (node.left) {
          queue.push(node.left);
      }
      if (node.right) {
          queue.push(node.right);
      }
      order.push(queue.shift().data);
      node = queue[0];
  }
  return order;
}