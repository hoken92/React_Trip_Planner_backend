import express from "express";
import Trip from "../models/trips.js";

const router = express.Router();

// GET /api/trips/:id
// Retrieve a trip by ID
router.get("/:id", async (req, res) => {
  try {
    const query = { _id: req.params.id };

    const trip = await Trip.find(query);
    res.status(200).json(trip);
  } catch (err) {
    res.send(err).status(400);
  }
});

// GET /api/trips
// Retrieve all Trips
router.get("/", async (req, res, next) => {
  try {
    const trips = await Trip.find();
    res.status(200).send(trips);
  } catch (err) {
    res.status(400).send(err);
  }
});

// POST /api/trips
// Create a trip
router.post("/", async (req, res, next) => {
  try {
    const newTrip = new Trip(req.body);
    await newTrip.save();

    res.status(200).send(newTrip);
  } catch (err) {
    res.status(400).send(err);
  }
});

// PUT/PATCH /api/trips
// Update a Trip by ID
router.put("/:id", async (req, res, next) => {
  try {
    const updatedTrip = await Trip.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send(updatedTrip);
  } catch (err) {
    res.status(400).send(err);
  }
});

// DELETE /api/trips
// Delete a Trip by ID
router.delete("/:id", async (req, res, next) => {
  try {
    const deletedTrip = await Trip.findByIdAndDelete(req.params.id);
    res.status(200).send(deletedTrip);
  } catch (err) {
    res.status(400).send(err);
  }
});

export default router;
