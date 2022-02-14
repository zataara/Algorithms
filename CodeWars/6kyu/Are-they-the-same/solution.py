def comp(a,b):
  print(a,b)
  if not a and not b: return True
  if len(a) == 0 and len(b) == 0: return True

  for num in a:
    if num**2 not in b:
      return False

  for num in b:
    if num**.5 not in a:
      return False
  
  return True




  #### #Unfinished