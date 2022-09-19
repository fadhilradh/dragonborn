const { response } = require("express");
const pool = require("../../dbPool");

class Generation {
  static store(expiration) {
    pool.query("INSERT INTO generation(expiration) VALUES($1)"),
      [generation.expiration],
      (error, response) => {
        if (error) return console.error(error);
        console.log(response);
      };
  }
}
