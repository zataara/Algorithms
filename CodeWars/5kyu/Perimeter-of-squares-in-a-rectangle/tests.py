import test
from solution import perimeter

test.assert_equals(perimeter(5), 80)
test.assert_equals(perimeter(7), 216)
test.assert_equals(perimeter(20), 114624)
test.assert_equals(perimeter(30), 14098308)
test.assert_equals(perimeter(100), 6002082144827584333104)