def is_valid_walk(walk):
    #determine if walk is valid
    if len(walk) != 10:
      return False  
    x = 0
    y = 0
    for dir in walk:
      if dir == 'n':
        x = x + 1
      if dir == 's':
        x = x - 1
      if dir == 'e':
        y = y + 1
      if dir == 'w':
        y = y - 1


    if x == 0 and y == 0:
      return True
    else: 
      return False