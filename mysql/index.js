const express = require("express");
const config = require("../config");
const router = require("./network");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rutas
app.use("/", router);

app.listen(config.mysqlService.port, () =>
  console.log("MySQL running on port ", config.mysqlService.port)
);
