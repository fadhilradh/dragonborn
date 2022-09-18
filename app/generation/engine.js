const Generation = require("./index.js");

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

    this.generationTimer = setTimeout(
      () => this.buildNewGeneration(),
      this.generation.expiration.getTime() - Date.now()
    );
  }
}

module.exports = GenerationEngine;
