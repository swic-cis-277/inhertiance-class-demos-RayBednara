
const Animal = require("./animal");

class Dog extends Animal {
  constructor({
    species,
    diet = [],
    size,
    sound,
    speed,
    name,
    frisbee
  }) {
    super({ species, diet, size, sound, speed });

    this.frisbee = frisbee;
    this.name = name;
  }

  get info() {
    return `
    My name is ${this.name}
    I am a ${this.species}
    My diet consists of ${this.diet}
    I am a ${this.size>0 ? "large" : "small"} sized animal
    I make a ${this.sound} sound
    I'm ${this.speed>0 ? "fast" : "slow"}
    Please ${this.frisbee >0? "":"don't"} throw my frisbee
    `;
  }

  speak() {
    return `${this.name} does his patented ${this.sound}`;
  }

  play() {
    return `You ${this.frisbee>1? `throw a frisbee to ${this.name}` : `scratch ${this.name}'s belly` }`;
  }
}

module.exports = Dog;