const TRAITS = require("../traits.json");

const DEFAULT_PROPERTIES = {
  name: "Dragon",
  get birthdate() {
    return new Date().toISOString();
  },
  get randomTraits() {
    const traits = [];
    TRAITS.forEach((TRAIT) => {
      const traitType = TRAIT.type;
      const traitValues = TRAIT.values;
      const traitValue =
        traitValues[Math.floor(Math.random() * traitValues.length)];
      traits.push({ traitType, traitValue });
    });
    return traits;
  },
};

class Dragon {
  constructor({ birthdate, name, traits } = {}) {
    this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
    this.name = name || DEFAULT_PROPERTIES.name;
    this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
  }
}

module.exports = Dragon;
