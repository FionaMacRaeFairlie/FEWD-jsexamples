console.log("variables.js");

// variable is a symbolic name for a value.
// Variables are declared with the var keyword:
let x;                     // Declare a variable named x.
// Values can be assigned to variables with an = sign
x = 0;                     // Now the variable x has the value 0
console.log(x);         // => 0: A variable evaluates to its value.

// Variables can hold values of any type
let i = 10;
i = "ten";
console.log(i);


// JavaScript supports several types of values
x = 1;                     // Numbers.
x = 0.01;                  // One Number type for integers and reals.
x = "hello world";         // Strings of text in quotation marks.
x = 'JavaScript';          // Single quote marks also delimit strings.
x = true;                  // Boolean values.
x = false;                 // The other Boolean value.
x = null;                  // Null  means "no value".
x = undefined;             // Undefined is like null.

// Adding two numbers will return the sum, but adding a number and a string will return a string
let a = 5 + 5;
let b = "5" + 5;
let c = "Hello" + 5;

console.log("a=" + a);
console.log("b=" + b);
console.log("c=" + c);


// const pizza=true;
// pizza=false;
// console.log(pizza);

var topic = "JavaScript";
if (topic) {
  let topic = "React";
  console.log("block", topic); // block React
}
console.log("global", topic); // global React
