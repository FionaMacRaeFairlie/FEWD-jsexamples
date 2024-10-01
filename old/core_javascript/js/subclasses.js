console.log("subclasses.js");

// "superclass" constructor
function Point(x, y) {      // By convention, constructors start with capitals
    this.x = x;            // this keyword is the new object being initialized
    this.y = y;            // Store function arguments as object properties
}                          // No return is necessary

// "superclass" prototype
Point.prototype.distance = function () {
    return Math.sqrt(      // Return the square root of x² + y²
        this.x * this.x +  // This is the Point object on which the method...
        this.y * this.y    // ...is invoked.
    );
};

// "subclass" constructor
function Point3D(x, y, z) {
    this.z = z;
    Point.apply(this, [x, y]);
}

// "subclass" prototype - hooks into  "superclass" prototype chain
Point3D.prototype = new Point();

// Now add properties to the prototype
Point3D.prototype.distance3D = function () {
    return Math.sqrt(// Return the square root of x² + y² + z²
        this.x * this.x +
            this.y * this.y +
                this.z * this.z);
};


var point3 = new Point3D(1, 1, 1);
console.log(point3.distance().toFixed(2));   // 1.41: inherited method

console.log(point3.distance3D().toFixed(2));    // 1.73: extension method


