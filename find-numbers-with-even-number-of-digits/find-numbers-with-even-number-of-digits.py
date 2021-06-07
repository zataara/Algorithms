class Solution:
    def findNumbers(self, nums: List[int]) -> int:
        evens = []
        for num in nums:
            if (len(str(num)) % 2 == 0):
                evens.append(num)
        return len(evens)