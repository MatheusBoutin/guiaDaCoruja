const { Model, DataTypes } = require("sequelize");

class Payment extends Model {
  static init(sequelize) {
    super.init(
      {
        passenger_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },

        trip_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },

        amount: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
        },

        payment_method: {
          type: DataTypes.STRING,
        },

        payment_date: {
          type: DataTypes.DATE,
        },

        receipt_path: {
          type: DataTypes.STRING,
        },

        status: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: "paid",
        },
      },
      {
        sequelize,
        tableName: "payments",
        underscored: true,
      }
    );
  }
}

module.exports = Payment;