const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.json());

const shopRouter = require("./routes/shop.router");

app.use("/api/v1/shop", shopRouter);

app.listen(process.env.PORT, () =>
  console.log("Server is running on port 5000")
);
