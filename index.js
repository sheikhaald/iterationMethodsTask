const numbers = [10, 13, 20, 25, 38, 35, 40];
//Part 1: Filtering

function Filtering(x) {
  return x >= 25;
}
const bigger = numbers.filter(Filtering);
console.log(bigger);
//Q2) Create a new array containing numbers that are divisible by 5.
function divisible(x) {
  return x % 5 == 0;
}
Newdivisible = numbers.filter(divisible);
console.log(Newdivisible);

//2: Mapping

//Q3) Create a new array that contains each number squared.
function squaredit(x) {
  return x * x;
}
square = numbers.map(squaredit);
console.log(square);
//Q4) Create a new array that contains each number multiplied by 2.
function multiplied(x) {
  return x * 2;
}
multi = numbers.map(multiplied);
console.log(multi);

//Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
function greaterthan(x) {
  return x >= 20;
}
const filterMap = numbers.filter(greaterthan).map(squaredit);

console.log(filterMap);
//Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
function divisiblemulti(x) {
  return x * 3;
}
const filtermap2 = numbers.filter(divisible).map(divisiblemulti);
console.log(filtermap2);
