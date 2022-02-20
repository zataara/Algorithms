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
    
# def accum(s):
#     # your code
#     out = []
#     count = 0
#     distance = len(s)
#     for char in s:
#       out.append(char.capitalize())
#       out.append(char.lower()*count)
#       count = count + 1
#       if(count<distance):
#         out.append('-')
#     return ''.join(out)

# from json.encoder import INFINITY


# def sum_two_smallest_numbers(numbers):
#     #your code here
#     min0 = min(numbers)
#     numbers.remove(min0)
#     min1 = min(numbers)



#     return min0 + min1

#  class Solution(object):
#     def trap(self, height):
#         """
#         :type height: List[int]
#         :rtype: int
#         """
#         out = 0
#         x = len(height)
#         for i in range(0, x - 1):
#           left = height[i]
#           for j in range(i):
#             left = max(left, height[j])
          
#           right = height[i]

#           for k in range(i + 1, x):
#             right = max(right, height[k])
          
#           out = out + (min(left, right) - height[i])

#         return out


# def solve(arr): 
    

#     for i in range(-1, 0 - len(arr)):
#       for j in range(-2, 0 - len(arr)):
#         if arr[i] == arr[j]:
#           arr.remove(arr[j])
#           print(arr[j])
#     return arr

# class Solution(object):
#     def threeSumClosest(self, nums, target):
#         """
#         :type nums: List[int]
#         :type target: int
#         :rtype: int
#         """
#         if len(nums) == 3:
#           return sum(nums)
#         toSum = [nums[0], nums[1], nums[2]]
#         closest = sum(toSum)

#         for i in range(0, len(nums) - 2):
#           for j in range(1, len(nums) - 1):
#             for k in range(2, len(nums)):
#               toSum = [nums[i], nums[j], nums[k]]
#               summed = sum(toSum)
#               if summed != target and abs(target - summed) < abs(target - closest):
#                 closest = summed

#         return closest

# def num_primorial(n):
#   factorials = []
#   result = 1
#   start = 2

#   while n > 0:
    

#   for i in factorials:
#     result = result * i 

#   return result


# class Node(object):
#     def __init__(self, data):
#         self.data = data
#         self.next = None
    
# def length(node):
#     def findCount(node):
#       count = 0
#       if node.next:
#         count += 1
#         return findCount(node.next) + count

#     return findCount(node)
  
# def count(node, data):
    # Your code goes here.


# def number_of_pairs(gloves):
#     pairs = 0
#     counted = []

#     for glove in gloves:
#       if glove not in counted:
#         counted.append(glove)
#         num_gloves = gloves.count(glove)
#         if num_gloves % 2 == 0:
#           pairs = pairs + num_gloves
#         else:
#           pairs = pairs + num_gloves - 1

    
#     return pairs / 2



# def get_middle(s):
#   s = s.split(' ')
#   n = len(s)
#   if n % 2 != 0:
#     return s[(n/2) + 1]
#   else:
#     return s[n/2] + s[n/2+1]



#  def minMovesToSeat(self, seats, students):
#         """
#         :type seats: List[int]
#         :type students: List[int]
#         :rtype: int
#         """
        
#         seat = seats.sort()
#         student = students.sort()

#         out = []

#         for i in range(0, len(seat)):
#             out.append(abs(seat[i] - student[i]))

#         return out