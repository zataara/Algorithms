def snail(array):
    
    if not array:
        return array
    #make a list to return at the end
    out = list()
    n = len(array)
    
    #add first row of array to out
    out += array.pop(0)
    
    #add final column of snailed array to out
    for i in range(1,n-1):
        out.append(array[i-1].pop())
    if array:
        out += array.pop()[::-1]
        
    
    for i in range(n-2,0,-1):
        out.append(array[i-1].pop(0))
        
    #recursively repeat with next "snail" of array
    out += snail(array)
    return out