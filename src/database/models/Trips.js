const { Model, DataTypes } = require("sequelize");

class Trip extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        destination: DataTypes.STRING,
        departure_date: DataTypes.DATE,
        return_date: DataTypes.DATE,
        total_cost: DataTypes.DECIMAL(10, 2),
        price_per_passenger: DataTypes.DECIMAL(10, 2),
        passenger_limit: DataTypes.INTEGER,
      },
      {
        sequelize,
        tableName: "trips",
        underscored: true,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Passenger, {
      foreignKey: "trip_id",
      as: "passengers",
    });
  }
}

module.exports = Trip;