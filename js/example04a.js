
// hide paragraph initially
document.getElementById("para1").style.display = "none";

// set listener as DOM attribute
document.getElementById("button2").onclick = function2;

// multiple event listeners on one element - can view in Elements > EventListeners tab in dev tools
document.getElementById("button3").addEventListener("click", function1);
document.getElementById("button3").addEventListener("click", function2);
document.getElementById("button3").addEventListener("mouseover", function3);
document.getElementById("button3").addEventListener("mouseleave", () => document.getElementById("para1").style.display = "none");  // use arrow function instead of function expression

// click handlers for nested elements - true for third parameter (usecapture) will cause outer element handler
// to execute first (capture), default is false, which causes inner element handler to execute first (bubbling)
document.getElementById("div1").addEventListener("click", function1, false);      // outer element - Hello
document.getElementById("button4").addEventListener("click", function2), false;      // inner element - World



// some handler functions
function function1() {
    alert ("Hello");
}

function function2() {
    alert ("World!");
}

function function3() {
    document.getElementById("para1").style.display = "block";
}




