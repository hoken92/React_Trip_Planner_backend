import express from "express";
import Event from "../models/events.js";

const router = express.Router();

// // GET /api/events
// Retrieve all events
router.get("/", async (req, res, next) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    res.send(err).status(400);
  }
});

export default router;
