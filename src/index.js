const Animal = require("./animal");
const Dog = require("./dog");
const Turtle = require("./turtle");

const steve = new Animal({
  species: "Bear",
  diet:["fish", "deer", "plants", "berries"],
  size: 1,
  sound: "roar",
  speed: 1,
});

console.log(steve.info);;
console.log(steve.speak());
steve.addNewFoodToDiet("Porridge");
console.log(steve.info);


const ares = new Dog({
  species:"dog",
  diet: ["dog food", "steak"],
  size:0,
  sound:"woof",
  speed:1,
  name:"Ares",
  frisbee:1
});

console.log(ares.play());
console.log(ares.speak());

const michael = new Turtle({
  species: "turtle",
  diet: ["lettuce"],
  size: 0,
  sound: "silence",
  speed: 0,
  name: "Michael",
  help:1
})

console.info(michael.info);
