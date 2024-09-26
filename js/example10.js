const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);

const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;
console.log(one);
console.log(two);
console.log(rest);

function sum(...args) {
  return args.reduce((x, y) => x + y);
}
let sumThree = sum(1, 2, 3);
console.log("sumThree: ", sumThree); // 6
let sumFive = sum(10, 20, 30, 40, 50);
console.log("sumFive: ", sumFive); // 150

function directions(...args) {
  var [start, ...remaining] = args;
  var [finish, ...stops] = remaining.reverse();
  console.log("*********************************************************");
  console.log(`drive through ${args.length} areas`);
  console.log(`start in ${start}`);
  console.log(`the destination is ${finish}`);
  console.log(`stopping ${stops.length} times in between`);
  console.log("*********************************************************");
}
directions("Glasgow","Edinburgh","Dundee");
directions("Manchester","Oxford", "London", "Chichester", "Cambridge","Lincoln", "Durham");