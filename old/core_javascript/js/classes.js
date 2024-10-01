console.log("classes.js");

// Define a constructor function to initialize a new Point object
function Point(x, y) {      // By convention, constructors start with capitals
    this.x = x;            // this keyword is the new object being initialized
    this.y = y;            // Store function arguments as object properties
}                          // No return is necessary, implicitly returns instance

// Define methods for Point objects by assigning them to the prototype
// object associated with the constructor function.
Point.prototype.distance = function () {
    return Math.sqrt(      // Return the square root of x² + y²
        this.x * this.x +  // This is the Point object on which the method...
        this.y * this.y    // ...is invoked.
    );
};

// Use a constructor function with the keyword "new" to create instances
var p = new Point(1, 1);   // The geometric point (1,1)

// Now the Point object p (and all future Point objects) inherits the method distance()           
console.log(p.distance().toFixed(2));  // => 1.414


// Another Point object
var p2 = new Point(2, 2);
console.log(p2.distance().toFixed(2));


// instanceof
console.log(p2 instanceof Point);  // true: p2 inherits from Point.prototype


