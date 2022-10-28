const DragonTable = require("./table");

const getDragonDetail = () => {
  DragonTable.getById({ dragonId })
    .then((dragon) => {})
    .catch((error) => {
      console.error(error);
      next(err);
    });
};
