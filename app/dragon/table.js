const pool = require("../../dbPool");

class DragonTable {
  static async store(dragon) {
    const client = await pool.connect();
    const { nickname, birthdate, generationId } = dragon;

    const res = await client.query(
      'INSERT INTO dragon(nickname, birthdate, "generationId") VALUES($1, $2, $3) RETURNING id',
      [nickname, birthdate, generationId]
    );
    client.release();
    return res.rows[0];
  }
}

module.exports = DragonTable;
