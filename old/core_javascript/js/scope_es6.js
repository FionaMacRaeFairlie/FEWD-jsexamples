
// demonstrating function scope
function funcDemo(){
    var fruit ='apple';
    console.log('inside function: ',fruit);
}

funcDemo();                    //inside function: apple
//console.log(fruit);          //error: fruit is not defined 

// demonstrating local scopes - function and block
function localDemo(){
    if(true){
        var fruit1 = 'apple';        //exist in function scope
        const fruit2 = 'banana';     //exist in block scope
        let fruit3 = 'strawberry';   //exist in block scope
    }
    console.log(fruit1);
    //console.log(fruit2);      //error: fruit2 is not defined 
    //console.log(fruit3);      //error: fruit3 is not defined 
}

localDemo();

// this example shows lexical scoping within a chain of nested functions
// and also show the meaning of this in nested functions
function lexDemo(){
    var fruit1 = 'apple';        
    const fruit2 = 'banana';     
    let fruit3 = 'strawberry';
    console.log("lexDemo this =" + this);     // Window
    function foo2(){
        var fruit4 = "grapefruit";
        console.log(fruit1);   // all exist in parent scope
        console.log(fruit2);
        console.log(fruit3);
        console.log("lexDemo this =" + this);     // Window
        function foo3() {
            console.log(fruit1);   // all exist in parent scope
            console.log(fruit2);
            console.log(fruit3);
            console.log(fruit4);
            console.log("lexDemo this =" + this);    // Window
        }
        foo3();
    }
    foo2();
}

lexDemo();

// this example additionally shows the meaning of this in a method, and nested functions inside a method
let anobject = {};
anobject.lexDemo = function (){
    var fruit1 = 'apple';        
    const fruit2 = 'banana';     
    let fruit3 = 'strawberry';
    console.log("anobject.lexDemo this =" + this);   // Object
    function foo2(){
        var fruit4 = "grapefruit";
        console.log(fruit1);   // all exist in parent scope
        console.log(fruit2);
        console.log(fruit3);
        console.log("anobject.lexDemo this =" + this);    // Window
        function foo3() {
            console.log(fruit1);   // all exist in parent scope
            console.log(fruit2);
            console.log(fruit3);
            console.log(fruit4);
            console.log("anobject.lexDemo this =" + this);    // Window
        }
        foo3();
    }
    foo2();
}

anobject.lexDemo()

// this example additionally shows the meaning of this in a method, and nested arrow functions inside a method
let anotherobject = {};
anotherobject.lexDemo = function() {
    var fruit1 = 'apple';        
    const fruit2 = 'banana';     
    let fruit3 = 'strawberry';
    console.log("anotherobject.lexDemo this =" + this);     // Object
    let foo2 = () => {
        var fruit4 = "grapefruit";
        console.log(fruit1);   // all exist in parent scope
        console.log(fruit2);
        console.log(fruit3);
        console.log("anotherobject.lexDemo foo2 this =" + this);     // Object
        let foo3 = () => {
            console.log(fruit1);   // all exist in parent scope
            console.log(fruit2);
            console.log(fruit3);
            console.log(fruit4);
            console.log("anotherobject.lexDemo foo3 this =" + this);     // Object
        }
        foo3();
    }
    foo2();
}

anotherobject.lexDemo()

let student1 = {
    studentname: 'Alice',
    scores: [75, 81, 66],
    showScores: function() {
      this.scores.forEach(function(score) {
        console.log(this.studentname + ":" + score);
      });
    }
};
  
student1.showScores();   // undefined:75  undefined:81  undefined:66

let student2 = {
    studentname: 'Alice',
    scores: [75, 81, 66],
    showScores: function() {
      this.scores.forEach(function(score) {
        console.log(this.studentname + ":" + score);
      }.bind(this));
    }
};
  
student2.showScores();    // Alice:75  Alice:81  Alice:66

let student3 = {
    studentname: 'Alice',
    scores: [75, 81, 66],
    showScores: function() {
      this.scores.forEach((score) => {
        console.log(this.studentname + ":" + score);
      });
    }
};
  
student3.showScores();     // Alice:75  Alice:81  Alice:66