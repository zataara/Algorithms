class Solution:
    def countMatches(self, items: List[List[str]], ruleKey: str, ruleValue: str) -> int:
        if ruleKey == 'type':
            windex = 0
        if ruleKey == 'color':
            windex = 1
        if ruleKey == 'name':
            windex = 2
        count = 0
        
        for item in items:
            if item[windex] == ruleValue:
                count += 1
        return count
                
                
            