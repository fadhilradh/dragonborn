const TRAITS = require("../data/traits.json");
const dbPool = require("../dbPool");

TRAITS.forEach((TRAIT) => {
  const traitType = TRAIT.type;
  const traitValues = TRAIT.values;

  traitValues.forEach((traitValue) => {
    dbPool.query(
      'INSERT INTO trait("traitType", "traitValue") VALUES($1, $2) RETURNING id',
      [traitType, traitValue],
      (error, response) => {
        if (error) console.error(error);

        const traitId = response.rows[0].id;
        console.log("traits ID inserted", traitId);
      }
    );
  });
});
