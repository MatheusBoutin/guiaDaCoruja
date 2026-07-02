const bcrypt = require("bcrypt");
const Passenger = require("../database/models/Passanger.js");

module.exports = {
  async findAll(req, res) {
    const passengers = await Passenger.findAll({
      attributes: {
        exclude: ["password"],
      },
    });

    return res.json(passengers);
  },

  async findOne(req, res) {
    const { id } = req.params;

    const passenger = await Passenger.findByPk(id, {
      attributes: {
        exclude: ["password"],
      },
    });

    if (!passenger) {
      return res.status(404).json({
        message: "Passageiro não encontrado",
      });
    }

    return res.json(passenger);
  },

async create(req, res) {
  const { name, email, phone, password, seatNumber, tripId } = req.body;

  if (!name || !password || !seatNumber || !tripId) {
    return res.status(400).json({
      message: "Nome, senha, assento e excursão são obrigatórios.",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const passenger = await Passenger.create({
    name,
    email,
    phone,
    password: hashedPassword,
    seat_number: seatNumber,
    trip_id: tripId,
  });

  const { password: _, ...passengerWithoutPassword } = passenger.toJSON();

  return res.status(201).json(passengerWithoutPassword);
},

  async update(req, res) {
    const { id } = req.params;
    const { name, email, phone, password, seatNumber, tripId } = req.body;

    const passenger = await Passenger.findByPk(id);

    if (!passenger) {
      return res.status(404).json({
        message: "Passageiro não encontrado",
      });
    }

    const data = {
      name,
      email,
      phone,
      seat_number: seatNumber,
      trip_id: tripId,
    };

    if (password) {
      data.password = await bcrypt.hash(password, 10);
    }

    await passenger.update(data);

    const { password: _, ...passengerWithoutPassword } = passenger.toJSON();

    return res.json(passengerWithoutPassword);
  },

  async remove(req, res) {
    const { id } = req.params;

    const passenger = await Passenger.findByPk(id);

    if (!passenger) {
      return res.status(404).json({
        message: "Passageiro não encontrado",
      });
    }

    await passenger.destroy();

    return res.status(200).json({
      message: "Passageiro removido com sucesso.",
    });
  },
};