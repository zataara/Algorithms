class Solution:
    def countConsistentStrings(self, allowed: str, words: List[str]) -> int:
        unmatched = 0
        for word in words:
            for char in word:
                if char not in allowed:
                    unmatched += 1
                    break
        result = len(words) - unmatched
        return result