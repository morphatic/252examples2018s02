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

def test_fibu():
  assert fb.fibu(15) == "FizzBuzz"
  assert fb.fibu(45) == "FizzBuzz"
  assert fb.fibu(165) == "FizzBuzz"
  assert fb.fibu(1) == 1
  assert fb.fibu(3) == 3
  assert fb.fibu(37) == 37

def test_count():
  assert fb.count(5)  == [ 1, 2, 3, 4, 5 ]
  assert fb.count(10) == [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

def test_play():
  assert fb.play(5)  == [ 1, 2, "Fizz", 4, "Buzz" ]
  assert fb.play(20) == [
    1, 2, "Fizz", 4, "Buzz",
    "Fizz", 7, 8, "Fizz", "Buzz",
    11, "Fizz", 13, 14, "FizzBuzz",
    16, 17, "Fizz", 19, "Buzz"
  ]