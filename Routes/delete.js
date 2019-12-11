const express = require("express");
const router = express.Router();
const itinerary = require("../itineraries");


module.exports = 
router.delete("/api/itineraries/byTitle/:title/comments/delete", async (req, res) => {

    await itinerary.update(
      { title: req.params.title}, 
      { $pull: {comments: {id: req.body.id}}}
    )
    res.json("OK");
  });