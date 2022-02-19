const express = require("express");
const router = express.Router();
const Controller = require("./controller");
const response = require("../../../network/response");

router.get("/", (req, res) => {
  const lista = Controller.list();
  response.success(req, res, lista, 200);
});

module.exports = router;
