const { Pool } = require("pg");
const poolConfig = require("./secrets/poolConfig.js");

const pool = new Pool(poolConfig);

module.exports = pool;
