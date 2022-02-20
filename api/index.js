const express = require("express");
const config = require("../config.js");
const user = require("./components/user/network");
const swaggerUi = require("swagger-ui-express");
const app = express();

// Routing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const swaggerDoc = require("./swagger.json");

app.use("/api/user", user);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// Server
app.listen(config.api.port, () =>
  console.log("API escuchando en puerto", config.api.port)
);
