









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