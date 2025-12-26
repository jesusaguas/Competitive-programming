# The Boyer–Moore voting algorithm is an efficient method for finding the majority element 
# in a sequence of items—defined as the element that appears more than \(n/2\) times. 
# It is a prototypical example of a streaming algorithm, 
# capable of processing data in a single pass with minimal memory.


# LeetCode Problem: https://leetcode.com/problems/majority-element/ (169. Majority Element)
from typing import List
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        # Boyer–Moore Voting Algorithm
        count = 0
        candidate = None

        for num in nums:
            if count == 0:
                candidate = num
            count += 1 if num == candidate else -1

        return candidate


        ## Other solution in O(N) space
        freq = {}
        N = len(nums)
        for num in nums:
            freq[num] = freq.get(num, 0) + 1
            if freq[num] > N/2:
                return num


        