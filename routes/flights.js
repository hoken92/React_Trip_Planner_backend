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
    // If req.query is empty, return an error
    if (!req.body) {
      res.status(400).send("Request body cannot be empty.");
      return;
    }

    // Initializes a new Bearer token everytime this route is called
    const amadeus = new Amadeus({
      clientId: process.env.APIKEY,
      clientSecret: process.env.APISECRET,
    });

    // Pagination from req.query
    // const page = parseInt(req.query.page);
    // const limit = parseInt(req.query.limit);
    // const startIndex = (page - 1) * limit;
    // const endIndex = page * limit;
    // const results = {};

    // No pages display if no other data exists past limit
    // if (endIndex < model.length) {
    //   results.next = {
    //     page: page + 1,
    //     limit: limit,
    //   };
    // }

    // if (startIndex > 0) {
    //   results.previous = {
    //     page: page - 1,
    //     limit: limit,
    //   };
    // }

    // Response from Amadeus API
    const response = await amadeus.shopping.flightOffersSearch.get(req.query);
    // results.results = response.data.slice(startIndex, endIndex);

    res.status(200).json(response.data);
  } catch (err) {
    res.status(400).send(err);
  }
});

export default router;
