# test_fizzbuzz.py

# import the code to be tested
from fizzbuzz import FizzBuzz

fb = FizzBuzz()

# a smoke test
def test_smoke():
  assert True == True

def test_fizz():
  assert fb.fizz(3) == "Fizz"
  assert fb.fizz(33) == "Fizz"
  assert fb.fizz(30303033) == "Fizz"
  assert fb.fizz(1) == 1
  assert fb.fizz(5) == 5
  assert fb.fizz(37) == 37

def test_buzz():
  assert fb.buzz(5) == "Buzz"
  assert fb.buzz(55) == "Buzz"
  assert fb.buzz(55055095) == "Buzz"
  assert fb.buzz(1) == 1
  assert fb.buzz(3) == 3
  assert fb.buzz(37) == 37
