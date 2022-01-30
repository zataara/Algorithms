def find_outlier(integers):
    evens = 0
    odds = 0
    evenIndices = []
    oddIndices = []

    
    for num in integers:
      if num % 2 == 0:
        evens = evens + 1
        evenIndices.append(integers.index(num))
      if num % 2 != 0:
        odds = odds + 1
        oddIndices.append(integers.index(num))
        
    if len(evenIndices) > 1:
      return integers[oddIndices[0]]
    if len(oddIndices) > 1:
      return integers[evenIndices[0]]

    
  