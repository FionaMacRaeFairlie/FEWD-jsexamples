const vehicles = ["mustang", "f-150", "expedition"];
// old way
const oldcar = vehicles[0];
const oldtruck = vehicles[1];
const oldsuv = vehicles[2];
//new way
const [car, truck, suv] = vehicles;
console.log(car);

function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);

console.log("Sum: " + add);
console.log("Difference: " + subtract);
console.log("Product: " + multiply);
console.log("Quotient " + divide);

// Destructuring Assignment
var sandwich = {
  bread: "dutch crunch",
  meat: "tuna",
  cheese: "swiss",
  toppings: ["lettuce", "tomato", "mustard"],
};
let { bread, meat } = sandwich;
console.log(bread, meat);
bread = "garlic";
meat = "turkey";
console.log(bread, meat);
console.log(sandwich.bread, sandwich.meat);
