class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        arr = []
        for n in candies:
            all = n + extraCandies
            if (all >= max(candies)):
                arr.append(True)
            else:
                arr.append(False)
        return arr