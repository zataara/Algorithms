class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        num = 0
        checked = []
        for char in jewels:
            for character in stones:
                if char == character and char not in checked:
                    num += 1
            checked.append(char)
        return num
        
        