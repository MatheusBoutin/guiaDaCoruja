const { Sequelize } = require("sequelize");

const databaseConfig = require("../config/database");

const Passenger = require("../models/Passenger");

const models = [Passenger];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig.development);

    models.forEach((model) => model.init(this.connection));
  }
}

module.exports = new Database();