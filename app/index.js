const express = require("express");
const GenerationEngine = require("./generation/engine.js");
const dragonRouter = require("./route/dragon.js");
const generationRouter = require("./route/generation.js");

const engine = new GenerationEngine();

engine.start();

setTimeout(() => engine.stop(), 20000);

const app = express();
app.locals.engine = engine;

app.use("/dragon", dragonRouter);
app.use("/generation", generationRouter);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    type: "error",
    message: err.message,
  });
});

module.exports = app;
