class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        n_list = [int(i) for i in str(n)]
        
        def mult(lst):
            result = 1
            for i in lst:
                result = result * i
            return result
        
        
        
        return mult(n_list) - sum(n_list)