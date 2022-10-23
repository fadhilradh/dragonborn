const pool = require("../../dbPool");
const TraitTable = require("../trait/table");

class DragonTraitTable {
  static store({ dragonId, traitType, traitValue }) {
    return new Promise((resolve, reject) => {
      TraitTable.getTraitId({ traitType, traitValue }).then(({ traitId }) =>
        pool.query(
          'INSERT INTO dragonTrait("traitId", "dragonId") VALUES($1, $2)',
          [traitId, dragonId],
          (error, response) => {
            if (error) reject(error);

            resolve();
          }
        )
      );
    });
  }
}

module.exports = DragonTraitTable;
