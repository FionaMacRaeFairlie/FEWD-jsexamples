

var foo='outside';

if(true){
    var foo = 'inside'
    console.log(foo);     //prints inside
}

console.log(foo);         //prints inside

let foo2='outside';

if(true){
    let foo2 = 'inside'
    console.log(foo2);    //prints inside
}

console.log(foo2);        //prints outside
