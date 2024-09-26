// Literal Enhancements with functions
var title = "Ben Lomond";
var elevation = 974;
var print = function () {
  console.log(`${this.title} is ${this.elevation} meters high`);
};
var hike = { title, elevation, print };
hike.print();



let skierName = "Julia Mancuso";
let sound = "go fast";

const skier = {
  skierName,
  sound,
  powerYell() {
    let yell = this.sound.toUpperCase();
    console.log(`${yell} ${yell} ${yell} `);
  },
  speed(mph) {
    this.speed = mph;
    console.log("speed: ", mph);
  },
};
skier.powerYell();
skier.speed(350);
console.log(JSON.stringify(skier));

// older syntax
// let oldSkierName = "Leo Taillefer";
// let oldSound = "Yeh";

const oldSkier = {
  skierName: skierName,
  sound: sound,
  powerYell: function () {
    let yell = this.sound.toUpperCase();
    console.log(`${yell} ${yell} ${yell} `);
  },
  speed: function (mph) {
    this.oldSpeed = mph;
    console.log("speed: ", mph);
  },
};
oldSkier.powerYell();
oldSkier.speed(350);
console.log(JSON.stringify(oldSkier));
