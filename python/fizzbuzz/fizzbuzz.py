# fizzbuzz.py

class FizzBuzz:

  fizz = lambda self, x: "Fizz" if x % 3 == 0 else x

  # def fizz(self, x):
  #   return "Fizz" if x % 3 == 0 else x

  def buzz(self, x):
    return "Buzz" if x % 5 == 0 else x
