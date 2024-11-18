import { Schema, model } from "mongoose";

const tripSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  event_info: {
    name: String,
    location: String,
    event_start_date: Date,
    event_end_date: Date,
  },
  flight_info: {
    origin: String,
    destination: String,
    departureDate: Date,
    returnDate: Date,
    price: Number,
  },
  hotel_info: {
    hotel_name: String,
    location: String,
    checkInDate: Date,
    checkOutDate: Date,
    guests: {
      type: Number,
      min: 1,
      max: 10,
    },
    price: Number,
  },
  created_at: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
});

export default model("Trip", tripSchema);
