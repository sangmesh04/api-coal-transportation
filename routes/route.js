const express = require("express");
const shortestPath = require("../controllers/shortestPath");
const router = new express.Router();

router.get("/", () => {
  return console.log("sangmeshwar mahajan");
});

router.post("/findRoute", shortestPath.shortestRoute);

router.get("/getData", shortestPath.getData);

router.get("/distributors", shortestPath.getDistributors);

module.exports = router;
