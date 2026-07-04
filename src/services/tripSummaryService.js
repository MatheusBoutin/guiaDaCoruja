const Trip = require("../database/models/Trips.js");
const Passenger = require("../database/models/Passanger.js");
const Payment = require("../database/models/Payments.js");

class TripSummaryService {
  async execute(tripId) {
    const trip = await Trip.findByPk(tripId);

    if (!trip) {
      return null;
    }

    const passengerCount = await Passenger.count({
      where: { trip_id: tripId },
    });

    const totalPaid = await Payment.sum("amount", {
      where: {
        trip_id: tripId,
        status: "paid",
      },
    });

    const totalCost = Number(trip.total_cost);
    const paid = Number(totalPaid || 0);
    const remainingAmount = totalCost - paid;
    const availableSeats = trip.passenger_limit - passengerCount;

    return {
      ...trip.toJSON(),
      total_paid: paid,
      remaining_amount: remainingAmount,
      passenger_count: passengerCount,
      available_seats: availableSeats,
    };
  }
}

module.exports = new TripSummaryService();