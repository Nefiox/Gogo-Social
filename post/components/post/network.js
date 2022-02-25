const express = require("express");
const router = express.Router();
const secure = require("./secure");
const Controller = require("./index");
const response = require("../../../network/response");

router.get("/", list);
router.get("/:id", get);
router.get("/user/:userId", getByUser);
router.post("/", upsert);
router.put("/", secure("update"), upsert);

function list(req, res, next) {
  Controller.list()
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch(next);
}

function get(req, res, next) {
  Controller.get(req.params.id)
    .then((user) => response.success(req, res, user, 200))
    .catch(next);
}

function upsert(req, res, next) {
  Controller.upsert(req.body)
    .then((data) => response.success(req, res, data, 201))
    .catch(next);
}

function getByUser(req, res, next) {
  Controller.getByUser(req.params.userId)
    .then((data) => response.success(req, res, data, 200))
    .catch(next);
}

module.exports = router;
