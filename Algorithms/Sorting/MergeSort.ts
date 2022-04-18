/** ------- Merge Sort  ------- **/
/*
Merge sort is a sorting algorithm that uses the “divide and conquer” concept.

- Given an array, we first divide it in the middle and we get 2 arrays.
- We recursively perform this operation, until we get to arrays of 1 element.
- Then we start building up the sorted array from scratch, by ordering the individual items we got.

Unlike Quick Sort, Merge Sort is not an in-place sorting algorithm, 
meaning it takes extra space other than the input array. 
This is because we are using auxiliary (helper) arrays to store the sub-arrays.
One advantage of Merge Sort is that it lends itself very well to multi-threading, 
since each respective half and be sorted on its own.
 
- Space complexity:         O(n)
- Time compexity(worst):    O(nlogn)
*/

function mergeSort(array) {
    const half = array.length / 2
    
    // Base case or terminating case
    if(array.length < 2){
      return array 
    }
    
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
}

function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}