
// fat arrows

const multiplyES5 = function(x,y) {
    return x * y;
}

// Can be rewritten as:
// const multiplyES6 = (x, y) => { return x * y };

// Or, since the function is a single expression return and braces are not needed.
const multiplyES6 = (x, y) => x * y;

console.log(multiplyES6(5,10)) //50


// Higher order function

function mapConsecutive(values, fn) {
    let result = [];
    for(let i=0; i < values.length -1; i++) {
        result.push(fn(values[i], values[i+1]));
    }
    return result;
}

const letters = ['a','b','c','d','e','f','g'];
let twoByTwo = mapConsecutive(letters, (x,y) => [x,y]);
console.log(twoByTwo);
// [[a,b], [b,c], [c,d], [d,e], [e,f], [f,g]]


// Arrays

const array = [1,2,3,4,5]

let fil = array.filter(x => x % 2 === 0);     // [2,4]

let mp = array.map(x => x * 2)                 // [2,4,6,8,10]

let red = array.reduce((x,y) => x + y, 0);     // 15

console.log(fil);
console.log(mp);
console.log(red);


let mp1 = array.map(x => [x, x**2]);
let mp2 = array.map(x => [x, x**2]).flat();

console.log(mp1);
console.log(mp2);

// method chaining

let cart = [
    {name: "Drink", price: 3.12},
    {name: "Steak", price: 45.15},
    {name: "Drink", price: 11.01}
];
  
let drinkTotal = cart.filter(x=> x.name === "Drink")
   .map(x=> x.price)
   .reduce((t,v) => t += v)
   .toFixed(2);
  
  console.log(`Total Drink Cost £${drinkTotal}`); // Total Drink Cost £14.13

  // rest parameters

  function sum(...args) {
    return args.reduce((num, tot) => tot + num);
  }

  let sumThree = sum(1,2,3);       // 6
  let sumFive = sum(10,20,30,40,50);   // 150

  console.log(sumThree);
  console.log(sumFive);