const express = require("express");
const router = express.Router();

const response = require("../../../network/response");

router.get("/", (req, res) => {
  //   res.send("Todo funciona");
  response.success(req, res, "Todo correcto", 200);
});

module.exports = router;
