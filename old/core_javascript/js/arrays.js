console.log("arrays.js");

// JavaScript also supports arrays (numerically indexed lists) of values:
let primes = [2, 3, 5, 7]; // An array of 4 values, delimited with [ and ].
console.log(primes[0]);                  // => 2: the first element (index 0) of the array.
console.log(primes.length);               // => 4: how many elements in the array.
primes[4] = 9;             // Add a new element by assignment.
primes[4] = 11;            // Or alter an existing element by assignment.
let empty = [];            // [] is an empty array with no elements.

// Arrays and objects can hold other arrays and objects:
let points = [             // An array with 2 elements.
    {x: 0, y: 0 },            // Each element is an object.
    {x: 1, y: 1 }
];
let data = {               // An object with 2 properties
    trial1: [[1, 2], [3, 4]],  // The value of each property is an array.
    trial2: [[2, 3], [4, 5]]   // The elements of the arrays are arrays.
};
console.log(JSON.stringify(points, null, 4));

console.log(JSON.stringify(data, null, 4));
