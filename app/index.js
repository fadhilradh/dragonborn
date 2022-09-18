const express = require("express");
const GenerationEngine = require("./generation/engine.js");

const engine = new GenerationEngine();

engine.start();

setTimeout(() => engine.stop(), 20000);

const app = express();
app.get("/dragon/new", (req, res) => {
  res.json({ dragon: engine.generation.newDragon() });
});

module.exports = app;
