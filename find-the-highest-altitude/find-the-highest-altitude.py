class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        alts = []
        alts.append(0)
        for i in range(0,len(gain)):
            el = alts[i] + gain [i]
            alts.append(el)
           
        return max(alts)