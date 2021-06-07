const express = require("express");
const router = express.Router();

const { check } = require("express-validator");

const { getUserById, getUser, getAllUsers } = require("../controllers/user");

router.route("/user").get(getAllUsers);

router.param("userId", getUserById);

router.route("/user/:userId").get(getUser);

module.exports = router;
