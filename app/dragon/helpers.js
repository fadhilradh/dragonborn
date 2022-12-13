const Dragon = require(".");
const pool = require("../../dbPool");
const DragonTable = require("./table");

const getDragonWithTraits = ({ dragonId }) => {
  return Promise.all([
    DragonTable.getById({ dragonId }),
    new Promise((resolve, reject) => {
      pool.query(
        `SELECT "traitType", "traitValue" 
         FROM trait
         INNER JOIN dragonTrait ON trait.id = dragonTrait."traitId"
         WHERE dragonTrait."dragonId" = $1`,
        [dragonId],
        (error, response) => {
          if (error) return reject(error);

          resolve(response.rows);
        }
      );
    }),
  ])
    .then(([dragon, dragonTraits]) => {
      return new Dragon({ ...dragon, traits: dragonTraits, dragonId });
    })
    .catch((error) => {
      console.error(error);
      next(err);
    });
};

module.exports = {
  getDragonWithTraits,
};
