const pool = require("../../dbPool");

class GenerationTable {
  static async store(generation) {
    const client = await pool.connect();
    try {
      const res = await client.query(
        "INSERT INTO generation(expiration) VALUES($1) RETURNING id",
        [generation.expiration]
      );
      console.log(res.rows[0]);
    } catch (error) {
      console.error;
    } finally {
      client.release();
    }
  }

  static async getById(generationId) {
    const client = await pool.connect();
    try {
      const res = await client.query("SELECT * FROM generation WHERE id = $1", [
        generationId,
      ]);
      console.log(res);
    } catch (error) {
      console.error(error);
    } finally {
      client.release();
    }
  }
}

module.exports = GenerationTable;
