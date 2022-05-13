
// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


// Function to insert tree nodes in level order from an array
function createTreeFromArray(arr: number [], root: TreeNode, index: number){
    // Base case for recursion
    if (index < arr.length) {
        root = new TreeNode(arr[index]);

        // insert left child
        root.left = createTreeFromArray(arr, root.left, 2 * index + 1);

        // insert right child
        root.right = createTreeFromArray(arr, root.right, 2 * index + 2);
    }
    return root;
}

// Function to print tree nodes in preOrder fashion
function preOrder(tree: TreeNode){
    if (tree != null) {
        console.log(tree.val + " ");
        inOrder(tree.left);
        inOrder(tree.right);
    }
}
   
// Function to print tree nodes in InOrder fashion
function inOrder(tree: TreeNode){
    if (tree != null) {
        inOrder(tree.left);
        console.log(tree.val + " ");
        inOrder(tree.right);
    }
}
