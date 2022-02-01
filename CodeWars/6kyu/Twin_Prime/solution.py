def is_twinprime(n):
  def primed(num):
    if num > 1:
      for i in range(2, num):
        if(num % i == 0):
          return False
    return True
  return primed(n+2) and primed(n-2)

