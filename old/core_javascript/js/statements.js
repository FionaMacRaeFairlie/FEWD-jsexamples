console.log("statements.js");

var a=[];
// The for loop
for(var i = 0; i < 10; i++) {
    a[i] = i;
}

//The for/in loop
for (var p in a) {
    console.log("item: " +p + " ");
}
