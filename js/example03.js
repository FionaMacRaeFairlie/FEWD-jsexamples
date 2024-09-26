var currentNode;

function addNewParagraph()
{
         currentNode = document.getElementById( "comment" );
         let newNode = document.createElement("p");
         newNode.appendChild(document.createTextNode("This is a new paragraph"));
         currentNode.parentNode.insertBefore(newNode, currentNode);
 }
