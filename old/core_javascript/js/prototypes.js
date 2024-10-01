
console.log("prototypes.js");

function Point(x, y) {                          // Constructor function
    this.x = x;                                 // own properties
    this.y = y;           
    this.angle = function() {                   // own method
        return Math.atan(this.y / this.x);
    };
}

Point.prototype.distance = function () {        // prototype method
    return Math.sqrt(      
        this.x * this.x +  
        this.y * this.y    
    );
};

// create object
let point = new Point(2, 2);
console.log(point.constructor);
console.log(Point.prototype.constructor);

// call own method
console.log(point.angle());

// call prototype method
console.log(point.distance());

// call method not defined in this object - follows prototype chain to Object
console.log(point.toString());

// modify prototype
Point.prototype.firstQuadrant = function() {
    return this.x >= 0 && this.y > 0;
};

// call prototype methods
console.log(point.distance());
console.log(point.firstQuadrant());

// replace prototype of class
Point.prototype = {
    constructor: Point,
    firstQuadrant: function () { return "not implemented"; }
};

// new object
let point2 = new Point(2, 1);

// call prototype methods
console.log(point.distance());            // original object uses original prototype
console.log(point.firstQuadrant());
console.log(point2.firstQuadrant());    // new object uses new prototype

// replace prototype of instance through (non-standard __proto__ property)
point.__proto__ = {
    constructor: Point,
    firstQuadrant: function () { return "definitely not implemented"; }
};

// call prototype methods
console.log(point.firstQuadrant());

// new object from prototype
let point3 = Object.create(point);
point3.x = 3;
console.log(point3.x, point3.y, point3.angle());        // 3 2 0.5880026035475675