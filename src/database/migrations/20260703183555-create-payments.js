"use strict";

/** @type {import("sequelize-cli").Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("payments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      passenger_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "passengers",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },

      trip_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "trips",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },

      amount: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
      },

      payment_method: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      payment_date: {
        allowNull: true,
        type: Sequelize.DATE,
      },

      receipt_path: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      status: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: "paid",
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
    await queryInterface.dropTable("payments");
  },
};