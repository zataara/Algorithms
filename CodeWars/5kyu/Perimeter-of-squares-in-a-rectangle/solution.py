def perimeter(n):
    # your code
  if n == 0:
    return 0
  if n == 1: 
    return 4

  count = n
  out = [0,0,1]

  while(count):
    out.append(
      sum(
        [out[-1], out[-2]]
      )
    )
    count = count - 1

  return sum(out) * 4