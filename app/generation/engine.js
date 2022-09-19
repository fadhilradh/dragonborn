const Generation = require("./index.js");
const GenerationTable = require("./table");

class GenerationEngine {
  constructor() {
    this.generation = null;
    this.generationTimer = null;
  }

  start() {
    this.buildNewGeneration();
  }

  stop() {
    clearTimeout(this.generationTimer);
  }

  buildNewGeneration() {
    this.generation = new Generation();
    console.log("🚀", this.generation);

    GenerationTable.store(this.generation);

    this.generationTimer = setTimeout(
      () => this.buildNewGeneration(),
      this.generation.expiration.getTime() - Date.now()
    );
  }
}

module.exports = GenerationEngine;
