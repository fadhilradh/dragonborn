const pool = require("../../dbPool");

class GenerationTable {
  static async store(generation) {
    const client = await pool.connect();
    try {
      const res = await client.query(
        "INSERT INTO generation(expiration) VALUES($1) RETURNING id",
        [generation.expiration]
      );

      return res.rows[0].id;
    } catch (error) {
      console.error;
    } finally {
      client.release();
    }
  }
}

module.exports = GenerationTable;
