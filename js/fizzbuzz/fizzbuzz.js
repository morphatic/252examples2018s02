const count = x => {
  let output = [];
  for ( let i = 1; i <= x; i += 1 ) {
    output.push(i);
  }
  return output;
};
const fizz = x => x %  3 === 0 ? "Fizz"     : x;
const buzz = x => x %  5 === 0 ? "Buzz"     : x;
const fibu = x => x % 15 === 0 ? "FizzBuzz" : x;

module.exports = {
  count,
  fizz,
  buzz,
  fibu
};