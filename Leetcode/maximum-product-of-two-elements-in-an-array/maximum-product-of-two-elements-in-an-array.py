class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        n1 = max(nums)
        i = nums.index(n1)
        nums.pop(i)
        n2 = max(nums)
        return ((n1 - 1) * (n2 -1))
        
        