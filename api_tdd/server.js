const mongoose = require("mongoose");
const app = require("./app");
const PORT = process.env.PORT || 5000;

require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Initialized db connection...");
    app.listen(PORT, console.log(`Server running on port ${PORT}...`));
  })
  .catch((err) => {
    console.log(err);
  });
