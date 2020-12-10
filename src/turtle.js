const Animal = require("./animal");

class Turtle extends Animal {
  constructor({
    species,
    diet = [],
    size,
    sound,
    speed,
    name,
    help
  }) {
    super({ species, diet, size, sound, speed });

    this.help = help;
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
    Please ${this.help >0? "don't":""} flip me over
    `;
  }

  speak() {
    return `${this.name} does his patented ${this.sound}`;
  }

  needsHelp() {
    return `You ${this.help>1? `flip over ${this.name}` : `watch ${this.name} slowly walk around` }`;
  }
}

module.exports = Turtle;