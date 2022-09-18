const Generation = require("./generation.js");

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
    console.log(
      "🚀 ~ file: engine.js ~ line 10 ~ GenerationEngine ~ buildNewGeneration ~ this.generation",
      this.generation
    );

    this.generationTimer = setTimeout(
      () => this.buildNewGeneration(),
      this.generation.expiration.getTime() - Date.now()
    );
  }
}

module.exports = GenerationEngine;
