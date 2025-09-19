import { animals } from "./animals.js";


const addNewAnimal=(animal)=> {
        let currentAnimal = animal.toString();
        let newNode = document.createElement("li");
        newNode.appendChild(document.createTextNode(`${currentAnimal}`));
        currentNode = animalList;
        currentNode.appendChild(newNode);
}

let currentNode;
let animalList = document.createElement("ul");
animals.map((animal) => addNewAnimal(animal));
document.getElementById("animalContainer").appendChild(animalList);

