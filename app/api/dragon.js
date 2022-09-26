const { Router } = require("express");
const DragonTable = require("../dragon/table");

const router = new Router();

router.get("/new", async (req, res, next) => {
  try {
    const newDragon = await req.app.locals.engine.generation.newDragon();
    await DragonTable.store(newDragon);
    res.json({ newDragon });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
