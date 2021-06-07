const express = require("express");
const router = express.Router();

const { getUserById } = require("../controllers/user");

const { getScore, createOrUpdateScore } = require("../controllers/score");

router.param("userId", getUserById);

router.route("/score/:userId").get(getScore).post(createOrUpdateScore);

module.exports = router;
