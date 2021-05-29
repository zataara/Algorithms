class Solution:
    def checkZeroOnes(self, s: str) -> bool:
        
        longest0 = 0
        longest1 = 0
        zero = 0
        one = 0
        
        for num in s:
            if num == '1':
                one += 1
                longest0 = max(longest0, zero)
                zero = 0
            else:
                zero += 1
                longest1 = max(longest1, one)
                one = 0
        
        longest0 = max(longest0, zero)
        longest1 = max(longest1, one)
        
        return longest1 > longest0