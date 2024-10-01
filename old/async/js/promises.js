console.log("promises.js");

// simple promise example

const count = true;    // simulate result of counting

let countValue = new Promise(function (resolve, reject) {

  setTimeout(() => {
    // ...simulate code that takes time to get count...
    if (count) {
      resolve("There is a count value.");
    } else {
      reject("There is no count value");
    }
  }, 3000);

});

console.log(countValue);

countValue
  .then((result) => console.log(result))
  .catch((error) => console.error('Error - ',error));

// alternative syntax
// countValue.then(
//   (result) => {console.log(result);},
//   (error) => {console.error('Error - ',error);}
// );

// using fetch

console.log(fetch("todos.json"))   // call to fetch returns a promise

fetch("todos.json")
  .then(response => response.json())
  .then(data => console.log(data));    // logs the data


fetch("wrong.json")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error - ',error));
  





 