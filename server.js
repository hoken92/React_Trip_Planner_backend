import express from "express";
import "dotenv/config";
import morgan from "morgan";
import cors from "cors";
import connect from "./db/connect.js";
import tripRouter from "./routes/trips.js";
import eventRouter from "./routes/events.js";
import flightRouter from "./routes/flights.js";
// import hotelRouter from "./routes/hotels.js";

const app = express();
const PORT = process.env.PORT || 5000;
connect();

// Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.send("Welcome to your Planner!");
});

app.use("/api/events", eventRouter);
app.use("/api/flights", flightRouter);
// app.use("/api/hotels", hotelRouter);
app.use("/api/trips", tripRouter);

// Error handling
app.get((error, req, res, next) => {
  res.status(500).json({ error });
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
