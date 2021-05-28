def countNegatives(self, grid: List[List[int]]) -> int:
        '''
        Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

        >>> countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])
        8

        >>> countNegatives([[3,2],[1,0]])
        0
        
        '''
        
        count = 0
                
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] < 0:
                    count += 1
                    
        return count