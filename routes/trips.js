import express from "express";
import Trip from "../models/trips.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const query = { _id: req.params.id };

    const trip = await Trip.find(query);
    res.status(200).json(trip);
  } catch (err) {
    res.send(err).status(400);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const trips = await Trip.find();
    res.status(200).send(trips);
  } catch (err) {
    res.status(400).send(err);
  }
});

export default router;
