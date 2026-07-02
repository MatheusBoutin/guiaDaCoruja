const { Model, DataTypes } = require("sequelize");

class Passenger extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        password: DataTypes.STRING,
        seat_number: DataTypes.INTEGER,
        trip_id: DataTypes.INTEGER,
      },
      {
        sequelize,
        tableName: "passengers",
        underscored: true,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Trip, {
      foreignKey: "trip_id",
      as: "trip",
    });
  }
}

module.exports = Passenger;