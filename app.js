const express = require("express");
const route = require("./routes/route");
require("dotenv").config();
const cors = require("cors");
const app = express();

// built-in middlewares
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server started on port", port);
});

app.use(route);
