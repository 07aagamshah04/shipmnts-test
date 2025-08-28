const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

//env
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

app.use(express.json());

app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(cookieParser());

const { ConnectMongoDB } = require("./connections");

//
const Warehouse = require("./routes/warehouse");
const Product = require("./routes/product");

ConnectMongoDB(MONGO_URL)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

//
app.use("/api", Warehouse);
app.use("/api/transaction", Product);

app.listen(PORT, () => {
  console.log(`SERVER CONNECTED AT PORT ${PORT}`);
});
