const { response } = require("express");
const pool = require("../../dbPool");
const DragonTraitTable = require("../dragonTrait/table");

class DragonTable {
  static async store(dragon) {
    const { nickname, birthdate, generationId } = dragon;
    return new Promise((resolve, reject) => {
      pool.query(
        'INSERT INTO dragon(nickname, birthdate, "generationId") VALUES($1, $2, $3) RETURNING id',
        [nickname, birthdate, generationId],
        (error, response) => {
          if (error) return reject(error);
          const dragonId = response.rows[0].id;

          Promise.all(
            dragon.traits.map(({ traitType, traitValue }) => {
              return DragonTraitTable.store({
                dragonId,
                traitType,
                traitValue,
              });
            })
          )
            .then(() => resolve({ dragonId }))
            .catch((error) => reject(error));
        }
      );
    });
  }

  static getById({ dragonId }) {
    return new Promise((resolve, reject) => {
      const query = {
        name: "fetch-dragon-by-id",
        text: `SELECT birthdate, nickname, "generationId" FROM dragon WHERE id = $1`,
        values: [dragonId],
      };
      pool.query(query, (error, res) => {
        if (error) return reject(error);

        if (response?.rows?.length === 0) return reject(new Error("no dragon"));

        const resp = res?.rows[0];

        resolve(resp);
      });
    });
  }
}

module.exports = DragonTable;
