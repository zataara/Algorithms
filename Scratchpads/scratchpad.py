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