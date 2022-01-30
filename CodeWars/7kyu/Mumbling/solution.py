def accum(s):
    # your code
    out = []
    count = 0
    distance = len(s)
    for char in s:
      out.append(char.capitalize())
      out.append(char.lower()*count)
      count = count + 1
      if(count<distance):
        out.append('-')
    return ''.join(out)