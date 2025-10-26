# sort_examples.py
"""
Demonstration of Python's list.sort() method and the sorted() function.

Topics covered:
1. Basic sorting (ascending and descending)
2. Sorting with key functions
3. Sorting nested lists
4. Sorting custom objects
5. Difference between .sort() and sorted()
"""

# -------------------------------
# 1. Basic sorting
# -------------------------------
numbers = [5, 2, 9, 1, 5, 6]

# Sort ascending (default)
numbers.sort()
print("Ascending:", numbers)  # [1, 2, 5, 5, 6, 9]

# Sort descending
numbers.sort(reverse=True)
print("Descending:", numbers)  # [9, 6, 5, 5, 2, 1]


# -------------------------------
# 2. Sorting with key functions
# -------------------------------
words = ["banana", "apple", "cherry", "date"]

# Sort alphabetically (default)
words.sort()
print("\nAlphabetical:", words)

# Sort by length of each word
words.sort(key=len)
print("By length:", words)  # ['date', 'apple', 'banana', 'cherry']

# Sort by the last character of each word
words.sort(key=lambda w: w[-1])
print("By last letter:", words)  # ['banana', 'apple', 'date', 'cherry']

# Sort by length descending
words.sort(key=len, reverse=True)
print("By length (desc):", words)  # ['banana', 'cherry', 'apple', 'date']


# -------------------------------
# 3. Sorting nested lists
# -------------------------------
intervals = [[8, 10], [1, 3], [2, 6], [15, 18]]

# Sort by first element
intervals.sort(key=lambda x: x[0])
print("\nBy first element:", intervals)  # [[1, 3], [2, 6], [8, 10], [15, 18]]

# Sort by second element
intervals.sort(key=lambda x: x[1])
print("By second element:", intervals)

# Sort by first element descending
intervals.sort(key=lambda x: x[0], reverse=True)
print("By first element (desc):", intervals) # [[15, 18], [8, 10], [2, 6], [1, 3]]


# -------------------------------
# 4. Sorting custom objects
# -------------------------------
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def __repr__(self):
        # This defines how objects are printed
        return f"{self.name} ({self.age})"


people = [
    Person("Alice", 30),
    Person("Bob", 25),
    Person("Charlie", 35)
]

# Sort by age (ascending)
people.sort(key=lambda p: p.age)
print("\nPeople sorted by age:", people) # [Bob (25), Alice (30), Charlie (35)]

# Sort by name (alphabetically)
people.sort(key=lambda p: p.name)
print("People sorted by name:", people) # [Alice (30), Bob (25), Charlie (35)]

# Sort by multiple attributes (e.g. name, then age)
people.sort(key=lambda p: (p.name, p.age))
print("People sorted by name, then age:", people) # [Alice (30), Bob (25), Charlie (35)]
# Python compares (p.name, p.age) for each person.
# If two people have the same name, it uses the second element (age) to break the tie.


# -------------------------------
# 5. Difference between sort() and sorted()
# -------------------------------
nums = [3, 1, 4, 1, 5, 9]

# Using sort() modifies the original list
nums.sort()
print("\nUsing sort():", nums)

# Using sorted() returns a new sorted list, original is unchanged
nums_unsorted = [3, 1, 4, 1, 5, 9]
nums_sorted = sorted(nums_unsorted)
print("Original (unchanged):", nums_unsorted)
print("New sorted list:", nums_sorted)

# sorted() can also be used with any iterable (not just lists)
set_example = {5, 3, 9, 1}
print("Sorted set:", sorted(set_example)) # [1, 3, 5, 9]
# Note: sorted() always returns a new list.
