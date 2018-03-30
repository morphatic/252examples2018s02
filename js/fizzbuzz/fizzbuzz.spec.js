// import the code to be tested
const fb = require('./fizzbuzz');

describe("A FizzBuzz program", () => {

  it("should count from 1 to [some arbitrary number]", () => {
    expect(fb.count(5)).toEqual([ 1, 2, 3, 4, 5 ]);
    expect(fb.count(10)).toEqual([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]);
  });

  it("can take a number and return 'Fizz' if it's a multiple of 3", () => {
    expect(fb.fizz(3)).toBe("Fizz");
    expect(fb.fizz(33)).toBe("Fizz");
    expect(fb.fizz(33333)).toBe("Fizz");

    expect(fb.fizz(1)).not.toBe("Fizz");
    expect(fb.fizz(10)).not.toBe("Fizz");
    expect(fb.fizz(37)).not.toBe("Fizz");
  });

  it("can take a number and return 'Buzz' if it's a multiple of 5", () => {
    expect(fb.buzz(5)).toBe("Buzz");
    expect(fb.buzz(55)).toBe("Buzz");
    expect(fb.buzz(55555)).toBe("Buzz");

    expect(fb.buzz(1)).not.toBe("Buzz");
    expect(fb.buzz(11)).not.toBe("Buzz");
    expect(fb.buzz(37)).not.toBe("Buzz");
  });

  it("can take a number and return 'FizzBuzz' if it's a multiple of 15", () => {
    expect(fb.fibu(15)).toBe("FizzBuzz");
    expect(fb.fibu(60)).toBe("FizzBuzz");
    expect(fb.fibu(15345)).toBe("FizzBuzz");

    expect(fb.fibu(1)).not.toBe("FizzBuzz");
    expect(fb.fibu(11)).not.toBe("FizzBuzz");
    expect(fb.fibu(37)).not.toBe("FizzBuzz");
  });

  it("should be able to play a game of FizzBuzz to [some arbitrary number]", () => {
    expect(fb.play(5)).toEqual([ 1, 2, "Fizz", 4, "Buzz"]);
    expect(fb.play(20)).toEqual([
      1, 2, "Fizz", 4, "Buzz",
      "Fizz", 7, 8, "Fizz", "Buzz",
      11, "Fizz", 13, 14, "FizzBuzz",
      16, 17, "Fizz", 19, "Buzz"
    ]);
  });
});