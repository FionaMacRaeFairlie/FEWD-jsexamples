console.log("scope.js");


local();
global();

// This function declares a local variable (with var keyword)
function local() {
    var localCity = "Glasgow";
    console.log("in function: " + localCity);
}

// This function assigns a variable - assumed to be global as no var keywork
function global() {
    globalCity = "Tokyo";
    console.log("in function: " + globalCity);
}

//console.log(localCity);  // causes an error as localCity undefined in global scope
console.log(globalCity);  // OK as globalCity defined in global scope
