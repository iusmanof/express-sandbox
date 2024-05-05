const express = require("express");
const bookRoutes = require("./routes/bookRoutes.js");
const app = express();

// middleware
app.use(express.json());

//difine all our routes
app.use("/", bookRoutes);
// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
