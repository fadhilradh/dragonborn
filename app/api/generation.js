const { Router } = require("express");
const GenerationTable = require("../generation/table");

const router = new Router();

router.get("/", (req, res) => {
  res.json({ generation: req.app.locals.engine.generation });
});

router.get("/:id", (req, res) => {
  console.log(
    "🚀 ~ file: generation.js ~ line 11 ~ router.get ~ req.param.id",
    req.params.id
  );
  const generation = GenerationTable.getById(req.param.id);
  res.json({ generation });
});

module.exports = router;
