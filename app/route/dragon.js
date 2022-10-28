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

router.get("/detail/:id", async (req, res, next) => {
  const dragonId = req.params.id;

  DragonTable.getById({ dragonId })
    .then((dragon) => {
      res.json({ dragon });
    })
    .catch((error) => {
      console.error(error);
      next(err);
    });
});
module.exports = router;
