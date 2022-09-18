const express = require("express");
const GenerationEngine = require("./generation/engine.js");
const dragonRouter = require("./api/dragon.js");
const generationRouter = require("./api/generation.js");

const engine = new GenerationEngine();

engine.start();

setTimeout(() => engine.stop(), 20000);

const app = express();
app.locals.engine = engine;

app.use("/dragon", dragonRouter);
app.use("/generation", generationRouter);

module.exports = app;
