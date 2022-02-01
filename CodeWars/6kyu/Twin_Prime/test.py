import test
from solution import is_twinprime

test.it("Basic tests")
test.assert_equals(is_twinprime(5), True)
test.assert_equals(is_twinprime(25), False)