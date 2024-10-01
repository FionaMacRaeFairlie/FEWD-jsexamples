console.log("es6subclasses.js");

// Define class with constructor
class Point {
    constructor(x,y) {
        this.x = x;            // this keyword is the new object being initialized
        this.y = y;
    }
    // Method
    distance() {
        return Math.sqrt(      // Return the square root of x² + y²
            this.x * this.x +  // this is the Point object on which the method...
            this.y * this.y    // ...is invoked.
        );
    }
}

class Point3D extends Point {
    constructor(x,y,z) {
        super(x,y);            // this keyword is the new object being initialized
        this.z = z;
    }
    // Method
    distance() {
        return Math.sqrt(      // Return the square root of x² + y² + z² 
            this.x * this.x +  // this is the Point object on which the method...
            this.y * this.y +
            this.z * this.z    // ...is invoked.
        );
    }
}
  
// Use class name with the keyword "new" to create instances
let p = new Point3D(1, 1, 1);   // The geometric point (1,1,1)

// Can call the method distance          
console.log(p.distance().toFixed(2));  // => 1.414


