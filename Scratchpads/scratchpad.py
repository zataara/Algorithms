class Solution(object):
    def trap(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        out = 0
        x = len(height)
        for i in range(0, x - 1):
          left = height[i]
          for j in range(i):
            left = max(left, height[j])
          
          right = height[i]

          for k in range(i + 1, x):
            right = max(right, height[k])
          
          out = out + (min(left, right) - height[i])

        return out


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