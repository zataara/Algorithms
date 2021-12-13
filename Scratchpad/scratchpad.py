



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