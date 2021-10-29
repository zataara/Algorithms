class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        maximum = 0
  
        
        for x in accounts:
            sum = 0 
        
            for y in x:
                sum+= y     
            maximum = max(sum, maximum) 
          
        return maximum