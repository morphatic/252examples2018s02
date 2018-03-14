// import code to be tested
const sum = require('./sum');
const difference = require('./difference');

// specify what the library does
describe("An arithmetic library", () => {

  it("can add two numbers", () => {
    expect(sum(3,4)).toBe(7);
    expect(sum(8,9)).toBe(17);
    expect(sum(-3,4)).toBe(1);
    expect(sum(304,4123)).toBe(4427);
  });

  it("can subtract two numbers", () => {
    expect(difference(5,3)).toBe(2);
  });

});