const currentNode = document.getElementById("content");
const text = "new paragraph";
const newNode = document.createElement("p");
newNode.appendChild(document.createTextNode(text));
currentNode.appendChild(newNode);