"use strict";

/** @type {import("sequelize-cli").Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("trips", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      destination: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      departure_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      return_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      total_cost: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
      },

      price_per_passenger: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
      },

      passenger_limit: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },

      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("trips");
  },
};