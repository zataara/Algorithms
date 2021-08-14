class Solution:
    def maximum69Number (self, num: int) -> int:
        r = ''
        nums = list(str(num))
        if '6' not in nums:
            return int(''.join(nums))
        i = nums.index('6')
        nums[i] = '9'
        return int("".join(nums))