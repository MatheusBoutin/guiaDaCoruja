const { Sequelize } = require("sequelize");

const databaseConfig = require("../config/database");

const Passenger = require("./models/Passanger.js");
const Trip = require("./models/Trips.js");

const models = [Passenger, Trip];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig.development);

    models.forEach((model) => model.init(this.connection));

    models.forEach((model) => {
      if (model.associate) {
        model.associate(this.connection.models);
      }
    });
  }
}

module.exports = new Database();