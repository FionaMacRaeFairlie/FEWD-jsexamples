console.log("async.js");


// note that code is in an async function

// simple promise with async/await

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

async function f(){

    let result = await countValue;
    console.log(result);

    // using fetch with async/await
    const response = await fetch("todos.json")                        // call to fetch returns a promise which we can await
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    const data = await response.json();
    console.log(data);

}
  
f();