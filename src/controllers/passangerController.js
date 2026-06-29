const Passenger = require("../models/Passenger");

module.exports = {
  async findAll(req, res) {
    const passengers = await Passenger.findAll();

    return res.json(passengers);
  },

  async findOne(req, res) {
    const { id } = req.params;

    const passenger = await Passenger.findByPk(id);

    if (!passenger) {
      return res.status(404).json({ message: "Passageiro não encontrado" });
    }

    return res.json(passenger);
  },

  async create(req, res) {
    const { name, email, phone, password, seatNumber, tripId } = req.body;

    const passenger = await Passenger.create({
      name,
      email,
      phone,
      password,
      seat_number: seatNumber,
      trip_id: tripId,
    });

    return res.status(201).json(passenger);
  },

  async update(req, res) {
    const { id } = req.params;
    const { name, email, phone, password, seatNumber, tripId } = req.body;

    const passenger = await Passenger.findByPk(id);

    if (!passenger) {
      return res.status(404).json({ message: "Passageiro não encontrado" });
    }

    await passenger.update({
      name,
      email,
      phone,
      password,
      seat_number: seatNumber,
      trip_id: tripId,
    });

    return res.json(passenger);
  },

  async remove(req, res) {
    const { id } = req.params;

    const passenger = await Passenger.findByPk(id);

    if (!passenger) {
      return res.status(404).json({ message: "Passageiro não encontrado" });
    }

    await passenger.destroy();

    return res.status(204).send();
  },
};