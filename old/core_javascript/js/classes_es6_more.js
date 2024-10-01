
// statics

class MyClass {
    constructor() {
        this.answer = 42;
    }

    myMethod() {
        return this.answer;
    }

    static myStaticMethod() {
        return "static";
    }
}
  
let myInstance = new MyClass()
console.log(myInstance.myMethod()); // instance
console.log(MyClass.myStaticMethod()); // static

// getters and setters

// in this version, backing field _name is created when setter first called

class Person {

    get name() {
        return this._name.toUpperCase();
    }

    set name(newName) {
        this._name = newName;   // validation could be done in here
    }

    walk() {
        console.log(this._name + ' is walking.');
    }
}
           
let bob = new Person();
bob.name = "Bob";
console.log(bob.name);  // Outputs 'BOB'

// in this version, backing field _name is explicitly assigned in constructor

class Person2 {
    constructor(name) {
        this._name = name;     // backing field
    }

    get name() {
        return this._name.toUpperCase();
    }

    set name(newName) {
        this._name = newName;   // validation could be done in here
    }

    walk() {
        console.log(this._name + ' is walking.');
    }
}
           
let bob2 = new Person2('Bob');
console.log(bob2.name);  // Outputs 'BOB'


class NumberHolder {
    get num() {
      return this._num;
    }
  
    set num(v) {
      const parsed = parseFloat(v);
      if (Number.isNaN(parsed)) {
        throw new Error(`"${v}" is not a number`);
      }
      this._num = parsed;
    }
  }
  
  const numHolder = new NumberHolder();
  console.log(numHolder.num); // undefined;
  
  numHolder.num = '42';
  console.log(numHolder.num); // 42
  
  // Error: "not a number" is not a number
  numHolder.num = 'not a number';
