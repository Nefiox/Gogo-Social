const express = require("express");
const swaggerUi = require("swagger-ui-express");
const config = require("../config.js");
const user = require("./components/user/network");
const auth = require("./components/auth/network");
const post = require("./components/post/network");
const errors = require("../network/errors");

const app = express();

// Routing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const swaggerDoc = require("./swagger.json");

app.use("/api/user", user);
app.use("/api/auth", auth);
app.use("/api/post", post);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(errors);

// Server
app.listen(config.api.port, () =>
  console.log("API escuchando en puerto", config.api.port)
);
