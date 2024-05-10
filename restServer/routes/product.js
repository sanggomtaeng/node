const express = require("express");
const router = express.Router();

router.get("/", function (req, res) { res.send("product root") });
router.get("/:id", function (req, res) { res.send("product root") });
router.post("/", function (req, res) {  res.send("insert root") });
router.put("/:id", function (req, res) {  res.send("update root") });
router.delete("/:id", function (req, res) {  res.send("delete root") });

module.exports = router;