import express from "express";
import "dotenv/config";
import morgan from "morgan";
import cors from "cors";
import connect from "../backend/db/connect.js";
import tripRouter from "./routes/trips.js";
import eventRouter from "./routes/events.js";

const app = express();
const PORT = process.env.PORT || 3000;
connect();

// Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.send("Welcome to your Planner!");
});

app.use("/events", eventRouter);
app.use("/trips", tripRouter);

// Error handling
app.get((error, req, res, next) => {
  res.status(500).json({ error });
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
