import express from "express";
import Event from "../models/events.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    res.send(err).status(400);
  }
});

export default router;
