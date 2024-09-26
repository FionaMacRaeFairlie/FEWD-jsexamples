let defaultPerson = {
  name: {
    first: "Shane",
    last: "McConkey",
  },
  favActivity: "skiing",
};

let me = {
  name: {
    first: "Fiona",
    last: "Fairlie",
  },
  favActivity: "dancing",
};

function logActivity(p = defaultPerson) {
  console.log(`${p.name.first} loves ${p.favActivity}`);
}

logActivity(me);
logActivity();

function displayActivity(p = defaultPerson) {
  return (displayString = `${p.name.first} loves ${p.favActivity}`);
}

function addNewParagraph(person) {
  let currentNode = document.getElementById("content");
  let newNode = document.createElement("p");
  let displayText = displayActivity(person);
  let textNode = document.createTextNode(displayText);
  newNode.appendChild(textNode);
  currentNode.appendChild(newNode);
}
addNewParagraph(me);
addNewParagraph();
