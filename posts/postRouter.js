const express = "express";
const Posts = require("./postDb");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "got the posts" });
});

router.get("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

router.put("/:id", (req, res) => {});

// custom middleware

function validatePostId(req, res, next) {}

module.exports = router;
