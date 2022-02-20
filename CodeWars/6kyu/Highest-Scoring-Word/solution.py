def high(x):
  arr = x.split(' ')
  highest_score = 0
  highest_index = 0

  lib = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 19,
    't': 20,
    'u': 21,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 26
  }
  
  for word in arr:
    current_word = 0
    for char in word.lower():
      current_word = current_word + lib[char]
    if current_word > highest_score:
      highest_score = current_word 
      highest_index = arr.index(char)
    current_word = 0

  return arr['highest_index']


  # unfinshed