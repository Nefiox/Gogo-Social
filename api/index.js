const express = require("express");
const config = require("../config.js");
const user = require("./components/user/network");
const app = express();

// Routing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", user);

// Server
app.listen(config.api.port, () =>
  console.log("API escuchando en puerto", config.api.port)
);
