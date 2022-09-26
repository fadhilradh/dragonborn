const { REFRESH_RATE } = require("../config.js");
const { SECONDS } = require("../../utils/time.js");
const Dragon = require("../dragon");

const refreshRate = REFRESH_RATE * SECONDS;

class Generation {
  constructor() {
    this.expiration = this.getExpiration();
    this.generationId = null;
  }

  getExpiration() {
    const expirationPeriod = Math.floor(Math.random() * (refreshRate / 2));

    const msUntilExpiration =
      Math.random() < 0.5
        ? refreshRate - expirationPeriod
        : refreshRate + expirationPeriod;

    return new Date(Date.now() + msUntilExpiration);
  }

  async newDragon() {
    console.log(
      "🚀 ~ file: index.js ~ line 26 ~ Generation ~ newDragon ~ Date.now() > this.expiration",
      Date.now() > this.expiration
    );

    if (Date.now() > this.expiration) {
      throw new Error(`This generation expired on ${this.expiration}`);
    }

    const dragon = new Dragon({ generationId: this.generationId });

    return dragon;
  }
}

module.exports = Generation;
