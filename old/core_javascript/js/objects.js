console.log("objects.js");

// JavaScript's most important data type is the object.
// An object is a collection of name/value pairs, or a string to value map.
let book = {               // Objects are enclosed in curly braces.
    topic: "JavaScript",   // The property "topic" has value "JavaScript".
    fat: true              // The property "fat" has value true.
};                         // The curly brace marks the end of the object.

// Access the properties of an object with . or []:
console.log(book.topic);                // => "JavaScript"
console.log(book["fat"]);               // => true: another way to access property values.
book.author = "Flanagan";  // Create new properties by assignment.
book.contents = {};        // {} is an empty object with no properties.
console.log(JSON.stringify(book, null, 4));


// When functions are assigned to the properties of an object, we call
// them "methods".  All JavaScript objects have methods:
let a = [];                // Create an empty array
a.push(1, 2, 3);             // The push() method adds elements to an array
a.reverse();               // Another method: reverse the order of elements

// We can define our own methods, too. The "this" keyword refers to the object
// on which the method is defined: in this case, the points array from above.
let points = [             // An array with 2 elements.
    {x: 0, y: 0 },            // Each element is an object.
    {x: 1, y: 1 }
];
points.dist = function () { // Define a method to compute distance between points
    let p1 = this[0];      // First element of array we're invoked on
    let p2 = this[1];      // Second element of the "this" object
    let a = p2.x - p1.x;     // Difference in X coordinates
    let b = p2.y - p1.y;     // Difference in Y coordinates
    return Math.sqrt(a * a + // The Pythagorean theorem
                     b * b); // Math.sqrt() computes the square root
};         
console.log(points.dist());// => 1.414: distance between our 2 points
