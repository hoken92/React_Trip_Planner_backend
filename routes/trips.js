import express from "express";
import Trip from "../models/trips.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).send("Welcome to Trips");
});

export default router;
