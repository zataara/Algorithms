def filter_list(l):
  out = []
  for char in l:
    if type(char) is int:
      out.append(char)

  return out
