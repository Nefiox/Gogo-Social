const express = require("express");
const router = express.Router();
const Controller = require("./index");
const response = require("../../../network/response");

router.post("/login", function (req, res) {
  Controller.login(req.body.username, req.body.password)
    .then((token) => {
      response.success(req, res, token, 200);
    })
    .catch((err) => response.error(req, res, "Información inválida", 400));
});

module.exports = router;
