const express = require("express");
const shortestPath = require("../controllers/shortestPath");
const router = new express.Router();

router.get("/", (req, res) => {
  try {
    return res.status(200).json({ data: "hello world!", status: true });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err.message, status: false });
  }
});

router.post("/findRoute", shortestPath.shortestRoute);

router.get("/getData", shortestPath.getData);

router.get("/distributors", shortestPath.getDistributors);

module.exports = router;
