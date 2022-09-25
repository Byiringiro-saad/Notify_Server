const express = require("express");

const { login } = require("../controllers/auth.controllers");

const router = express.Router();

router.get("/login", login);

module.exports = router;
