const Trip = require("../database/models/Trips.js");

module.exports = {
  async findAll(req, res) {
    const trips = await Trip.findAll();

    return res.json(trips);
  },

  async findOne(req, res) {
    const { id } = req.params;

    const trip = await Trip.findByPk(id);

    if (!trip) {
      return res.status(404).json({
        message: "Excursão não encontrada.",
      });
    }

    return res.json(trip);
  },

  async create(req, res) {
    const {
      title,
      destination,
      departureDate,
      returnDate,
      totalCost,
      pricePerPassenger,
      passengerLimit,
    } = req.body;

    if (
      !title ||
      !destination ||
      !departureDate ||
      !returnDate ||
      !totalCost ||
      !pricePerPassenger ||
      !passengerLimit
    ) {
      return res.status(400).json({
        message:
          "Título, destino, data de ida, data de volta, custo total, valor por passageiro e limite de passageiros são obrigatórios.",
      });
    }

    const trip = await Trip.create({
      title,
      destination,
      departure_date: departureDate,
      return_date: returnDate,
      total_cost: totalCost,
      price_per_passenger: pricePerPassenger,
      passenger_limit: passengerLimit,
    });

    return res.status(201).json(trip);
  },

  async update(req, res) {
    const { id } = req.params;

    const {
      title,
      destination,
      departureDate,
      returnDate,
      totalCost,
      pricePerPassenger,
      passengerLimit,
    } = req.body;

    const trip = await Trip.findByPk(id);

    if (!trip) {
      return res.status(404).json({
        message: "Excursão não encontrada.",
      });
    }

    await trip.update({
      title,
      destination,
      departure_date: departureDate,
      return_date: returnDate,
      total_cost: totalCost,
      price_per_passenger: pricePerPassenger,
      passenger_limit: passengerLimit,
    });

    return res.json(trip);
  },

  async remove(req, res) {
    const { id } = req.params;

    const trip = await Trip.findByPk(id);

    if (!trip) {
      return res.status(404).json({
        message: "Excursão não encontrada.",
      });
    }

    await trip.destroy();

    return res.status(200).json({
      message: "Excursão removida com sucesso.",
    });
  },
};