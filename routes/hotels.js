import Amadeus from "amadeus";
import express from "express";

const router = express.Router();

/**
 * 3rd Party API - Amadeus
 * Retrives all flights depending on the req.query and the required fields
 * Frontend query will add a max of 20 results
 */
router.get("/", async (req, res, next) => {
  try {
    // Initializes a new Bearer token everytime this route is called
    const amadeus = new Amadeus({
      clientId: process.env.APIKEY,
      clientSecret: process.env.APISECRET,
    });

    const data = await amadeus.shopping.hotelsByCity.get(req.query);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(err);
  }
});

export default router;
