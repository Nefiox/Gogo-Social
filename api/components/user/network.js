const express = require("express");
const secure = require("./secure");
const router = express.Router();
const Controller = require("./index");
const response = require("../../../network/response");

router.get("/", list);
router.get("/:id", get);
router.post("/", upsert);
router.put("/", secure('update'), upsert);

// Internal functions
function list(req, res) {
  Controller.list()
    .then((lista) => {
      response.success(req, res, lista, 200);
    })
    .catch((err) => response.error(req, res, err.message, 500));
}

function get(req, res) {
  Controller.get(req.params.id)
    .then((user) => response.success(req, res, user, 200))
    .catch((err) => response.error(req, res, err.message, 500));
}

function upsert(req, res) {
  Controller.upsert(req.body)
    .then((data) => response.success(req, res, data, 200))
    .catch((err) => response.error(req, res, err.message, 500));
}

module.exports = router;
