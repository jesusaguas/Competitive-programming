# 1. BASIC ARRAY OPERATIONS
arr = [1, 2, 3, 4, 5]
print(arr[0])  # Access: O(1)
arr.append(6)  # Add end: O(1)
arr.insert(0, 0)  # Add middle: O(n)
arr.pop()  # Remove end: O(1)
arr.pop(0)  # Remove start: O(n)

# 2. ARRAY CREATION
arr1 = [0] * 5  # [0, 0, 0, 0, 0]
arr2 = list(range(5))  # [0, 1, 2, 3, 4]
arr3 = [i**2 for i in range(5)]  # [0, 1, 4, 9, 16]

# 3. 2D ARRAYS
matrix = [[0] * 3 for _ in range(3)]  # 3x3 matrix
matrix[0][1] = 5
print(matrix)

# 4. COMMON DSA PATTERNS

# Prefix Sum
arr = [1, 2, 3, 4, 5]
prefix = [0]
for num in arr:
    prefix.append(prefix[-1] + num)
print(prefix)  # [0, 1, 3, 6, 10, 15]

# Two Pointers
def two_sum(arr, target):
    left, right = 0, len(arr) - 1
    while left < right:
        s = arr[left] + arr[right]
        if s == target:
            return [left, right]
        elif s < target:
            left += 1
        else:
            right -= 1
    return []

# Sliding Window
def max_subarray_sum(arr, k):
    window_sum = sum(arr[:k])
    max_sum = window_sum
    for i in range(k, len(arr)):
        window_sum = window_sum - arr[i-k] + arr[i]
        max_sum = max(max_sum, window_sum)
    return max_sum

# Binary Search
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

# 5. USEFUL METHODS
arr = [3, 1, 4, 1, 5, 9]
arr.sort()  # In-place sort: O(n log n)
arr.reverse()  # Reverse: O(n)
print(max(arr), min(arr), sum(arr))
print(arr.count(1))  # Count occurrences
print(arr.index(5))  # Find first index

# 6. SLICING
arr = [0, 1, 2, 3, 4, 5]
print(arr[1:4])  # [1, 2, 3]
print(arr[:3])  # [0, 1, 2]
print(arr[::2])  # [0, 2, 4] - every 2nd element