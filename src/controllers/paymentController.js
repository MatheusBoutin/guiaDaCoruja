const Payment = require("../database/models/Payments");

module.exports = {
  async findAll(req, res) {
    const payments = await Payment.findAll();

    return res.json(payments);
  },

  async findOne(req, res) {
    const { id } = req.params;

    const payment = await Payment.findByPk(id);

    if (!payment) {
      return res.status(404).json({
        message: "Pagamento não encontrado.",
      });
    }

    return res.json(payment);
  },

  async create(req, res) {
    const {
      passengerId,
      tripId,
      amount,
      paymentMethod,
      paymentDate,
      receiptPath,
      status,
    } = req.body;

    if (!passengerId || !tripId || !amount) {
      return res.status(400).json({
        message: "Passageiro, excursão e valor são obrigatórios.",
      });
    }

    const payment = await Payment.create({
      passenger_id: passengerId,
      trip_id: tripId,
      amount,
      payment_method: paymentMethod,
      payment_date: paymentDate,
      receipt_path: receiptPath,
      status: status || "paid",
    });

    return res.status(201).json(payment);
  },

  async update(req, res) {
    const { id } = req.params;

    const {
      passengerId,
      tripId,
      amount,
      paymentMethod,
      paymentDate,
      receiptPath,
      status,
    } = req.body;

    const payment = await Payment.findByPk(id);

    if (!payment) {
      return res.status(404).json({
        message: "Pagamento não encontrado.",
      });
    }

    await payment.update({
      passenger_id: passengerId,
      trip_id: tripId,
      amount,
      payment_method: paymentMethod,
      payment_date: paymentDate,
      receipt_path: receiptPath,
      status,
    });

    return res.json(payment);
  },

  async remove(req, res) {
    const { id } = req.params;

    const payment = await Payment.findByPk(id);

    if (!payment) {
      return res.status(404).json({
        message: "Pagamento não encontrado.",
      });
    }

    await payment.destroy();

    return res.status(200).json({
      message: "Pagamento removido com sucesso.",
    });
  },
};