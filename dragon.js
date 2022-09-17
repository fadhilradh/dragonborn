const DEFAULT_PROPERTIES = {
  name: "Dragon",
  get birthdate() {
    return new Date().toISOString();
  },
};

class Dragon {
  constructor({ birthdate, name } = {}) {
    this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
    this.name = name || DEFAULT_PROPERTIES.name;
  }
}

module.exports = Dragon;
