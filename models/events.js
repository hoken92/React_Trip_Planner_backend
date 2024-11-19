import { Schema, model } from "mongoose";

const pointSchema = new Schema({
  type: {
    type: String,
    enum: ["Point"],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

// Schema for Events
const eventSchema = new Schema({
  event_name: {
    type: String,
    required: true,
  },
  location: {
    city: {
      type: String,
      required: true,
    },
    cityCode: String,
    geolocation: {
      type: pointSchema,
      required: true,
    },
  },
  event_date: {
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: true,
    },
  },
});

eventSchema.index({ event_date: 1 });

export default model("Event", eventSchema);
