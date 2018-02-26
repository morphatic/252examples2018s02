/**
 * A function to add two numbers
 * @param  {Number} a The first number to be added
 * @param  {Number} b The second number to be added
 * @return {Number}   The sum of a and b
 */
let sum = (a,b) => {
  return a + b;
};

module.exports = sum;

// Alternative ways to write the
// sum function
// 
// function sum(a, b) {
//   return a + b;
// }
// 
// let sum = function(a,b) {
//   return a + b;
// };
// 
// let sum = (a,b) => a + b;
// 
// module.exports = (a,b) => a + b;
