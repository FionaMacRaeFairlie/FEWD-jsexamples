function mapConsecutive(values, fn) {
  let result = [];
  for (let i = 0; i < values.length - 1; i++) {
    result.push(fn(values[i], values[i + 1]));
  }
  return result;
}
const letters = ["a", "b", "c", "d", "e", "f", "g"];

let twoByTwo = mapConsecutive(letters, (x, y) => [x, y]);
console.log("output from twobytwo function: ",twoByTwo);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("array sort example");
fruits.sort();  //note alphabetic sort, this does not sort numbers into size order
console.log(fruits);

const numbers = [33, 2, 8, 11, 54, -2, 17]; 

console.log("array filter example");
evenNumbers=numbers.filter(x => x%2 ===0);
console.log(evenNumbers)