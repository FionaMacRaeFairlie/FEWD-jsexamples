// JavaScript supports several types of values
x = 1;                     // Numbers.
console.log("current value of x: ",x," current type of x:", typeof(x));
x = 0.01;                  // One Number type for integers and reals.
console.log("current value of x: ",x," current type of x:", typeof(x));
x = "hello world";         // Strings of text in quotation marks.
console.log("current value of x: ",x," current type of x:", typeof(x), " uses double quotes");
x = 'JavaScript';          // Single quote marks also delimit strings.
console.log("current value of x: ",x," current type of x:", typeof(x), "strings can also use single quotes");
x = true;                  // Boolean values.
console.log("current value of x: ",x," current type of x:", typeof(x));
x = false;                 // The other Boolean value.
console.log("current value of x: ",x," current type of x:", typeof(x));
x = null;                  // Null  means "no value".
console.log("current value of x: ",x," current type of x:", typeof(x));
x = undefined;             // Undefined is like null.
console.log("current value of x: ",x," current type of x:", typeof(x));
x=NaN;
console.log("NaN type :", typeof (x));


let book = {                    // Objects are enclosed in curly braces.
        topic: "JavaScript",   				    
        inStock: true           
    };  
console.log("book object: ",book);   
console.log("book.topic: ",book.topic, "book.topic has type:", typeof(book.topic));
console.log("book.inStock: ",book.inStock, "book.inStock has type:", typeof(book.inStock));   

book.author = "Flanagan";   // Create new properties by assignment.
book.contents = {};     // {} is an empty object with no properties.

console.log("book object now contains the following data:\n ",JSON.stringify(book, null, 4));
