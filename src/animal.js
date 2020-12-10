class Animal {
  constructor({ species, diet = [], size, sound, speed }) {
    this.species = species;
    this.diet = diet;
    this.size = size;
    this.sound = sound;
    this.speed = speed;
  }

  get info() {
    return `
    I am a ${this.species}
    My diet consists of ${this.diet.join(", ")}
    I am a ${this.size>0 ? "large" : "small"} sized animal
    I make a ${this.sound} sound
    I'm ${this.speed>0 ? "fast" : "slow"}
    `;
  }

  speak() {
    return `${this.sound}`;
  }

  addNewFoodToDiet(food) {
    this.diet.push(food);
  }
}

module.exports = Animal;