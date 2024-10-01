
console.log("functions.js");

// Functions are parameterized blocks of JavaScript code that we can invoke.
function plus1(x) {        // Define a function named "plus1" with parameter "x"
    return x + 1;          // Return a value one larger than the value passed in
}

let y = 3;
console.log(plus1(y));    // => 4: y is 3, so this invocation returns 3+1


const cube = function (x) { // Functions are values and can be assigned to variables
    return x * x * x;     // Compute the function's value
};                        // Semicolon marks the end of the assignment.

console.log(cube(plus1(y)));  // => 64: invoke two functions in one expression


const p1 = plus1;
console.log(p1(cube(y)));     // => 28: invoke two functions in one expression

function hypotenuse(a, b) {   // Nested functions
    function square(x) {
         return x*x;
    }
    return Math.sqrt(square(a) + square(b));
}
console.log(hypotenuse(5,12));  // => 13


// Weird example! 
let a = [function (x) { return x * x; }, 20];   // An array literal
console.log(a[0](a[1]));                     // => 400



// Defining and executing self-invoking functions
(function(msg) {
    console.log(msg);
})("Hello ");

(function() {
    console.log("World");
})();

// Comparing standard and self-invoking functions

let hello = function() {     // standard function
    return "Hello World";
};

console.log(hello);

let hello_iife = (function() {     // iife
    return "Hello World";
})();

console.log(hello_iife);


