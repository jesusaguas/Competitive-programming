/** ------- Quicksort  ------- **/
/*
Quicksort uses the divide-and-conquer strategy to sort the given list of elements. This means that the algorithm breaks down the problem into subproblems until they become simple enough to solve directly.

1. Select an element of the array. This element is generally called the pivot. Most often this element is either the first or the last element in the array.
2. Then, rearrange the elements of the array so that all the elements to the left of the pivot are smaller than the pivot and all the elements to the right are greater than the pivot. The step is called partitioning. If an element is equal to the pivot, it doesn't matter on which side it goes.
3. Repeat this process individually for the left and right side of the pivot, until the array is sorted.

Algorithmically this can be implemented either recursively or iteratively. However, the recursive approach is more natural for this problem.
The weak spot of the Quicksort algorithm is the choice of the pivot. 
Choosing a bad pivot (one that is greater than/less than most elements) every time, would give us the worst-case time complexity.

- Space complexity(in-place):   O(1)
- Time compexity(average):      O(nlogn)
- Time compexity(worst):        O(n^2)
*/

/*
Here, we are taking the last element as the pivot.
We are using a variable pivotIndex to keep track of the "middle" position where all the elements to the left are less, and all the elements to the right are more than the pivotValue.
As the last step, we swap the pivot, which is the last element in our case, with the pivotIndex. 
So, in the end, our pivot element would end up in the "middle." With all elements less than the pivot to the left side of it, and all elements greater than or equal to the pivot to the right of the pivot.
*/
function partition(arr: number[], start: number, end:number){
    // Taking the last element as the pivot
    const pivotValue = arr[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            // Swapping elements
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            // Moving to next element
            pivotIndex++;
        }
    }
    
    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    return pivotIndex;
};

/*
In this function, we start by partitioning the array. 
After that, we partition both left and right subarrays. 
We repeat that process as long as the method receives an array that isn't empty or has more than one element.
*/
function quickSortRecursive(arr: number[], start: number, end: number) {
    // Base case or terminating case
    if (start >= end) {
        return;
    }
    
    // Returns pivotIndex
    let index = partition(arr, start, end);
    
    // Recursively apply the same logic to the left and right subarrays
    quickSortRecursive(arr, start, index - 1);
    quickSortRecursive(arr, index + 1, end);
}


function quickSortIterative(arr: number[]) {
    // Creating an array that we'll use as a stack, using the push() and pop() functions
    stack = [];
    
    // Adding the entire initial array as an "unsorted subarray"
    stack.push(0);
    stack.push(arr.length - 1);
    
    // There isn't an explicit peek() function
    // The loop repeats as long as we have unsorted subarrays
    while(stack[stack.length - 1] >= 0){
        
        // Extracting the top unsorted subarray
    	let end = stack.pop();
        let start = stack.pop();
        
        let pivotIndex = partition(arr, start, end);
        
        // If there are unsorted elements to the "left" of the pivot,
        // we add that subarray to the stack so we can sort it later
        if (pivotIndex - 1 > start){
        	stack.push(start);
            stack.push(pivotIndex - 1);
		}
        
        // If there are unsorted elements to the "right" of the pivot,
        // we add that subarray to the stack so we can sort it later
        if (pivotIndex + 1 < end){
        	stack.push(pivotIndex + 1);
            stack.push(end);
        }
    }
}