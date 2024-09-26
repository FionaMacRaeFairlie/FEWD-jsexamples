// main.js
import { sayHello, message } from "./module.js";

console.log(message);  

document.getElementById("displayMoreContent").innerHTML=message;
document.getElementById("displayContent").innerHTML=sayHello();