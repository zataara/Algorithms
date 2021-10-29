class Solution:
    def halvesAreAlike(self, s: str) -> bool:
        s1 = s[:len(s)//2]
        s2 = s[len(s)//2:]
        counts1 = 0
        counts2 = 0
        
        
        for i in s1:
            if i in 'aeiouAEIOU':
                counts1 = counts1 +1
                
        for j in s2:
            if j in 'aeiouAEIOU':
                counts2 = counts2 + 1
                
        return counts1 == counts2
        