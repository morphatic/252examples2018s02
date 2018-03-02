# test_arithmetic.py

# import the code to be tested
from sum import sum

# write a smoke test
def test_smoke():
  assert True == True

# test that sum(a,b) == a + b
def test_sum():
  assert sum(3,4) == 7
  assert sum(5.5,12.1) == 17.6
  assert sum(-5,21) == 16
  assert sum(1234,5678) == 6912