require("dotenv").config();
const logger = require("morgan");
const cors = require('cors')
const express = require("express");
const app = express();
const port = 3000;
const sequelize = require("./models");
const { productRouter } = require("./routes/productRouter");

try {
  const connection = async () => {
    await sequelize.sync({ force: true });
  };
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

if (process.env.NODE_ENV === "development") app.use(logger("dev"));

app.use(express.json());
app.use(cors())

app.use("/api/", productRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
