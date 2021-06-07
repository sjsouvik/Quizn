const express = require("express");
const router = express.Router();

const { check } = require("express-validator");

const { signup, login } = require("../controllers/user");

router.route("/signup").post(
  [
    check("firstName", "FirstName should be at least of 3 chars").isLength({
      min: 3,
    }),
    check("lastName", "LastName should be at least of 1 char").isLength({
      min: 1,
    }),
    check("email", "Give a valid email").isEmail(),
    check(
      "password",
      "Password should be at least 5 chars long and contain a number"
    )
      .isLength({ min: 5 })
      .matches(/\d/),
  ],
  signup
);

router.route("/login").post(login);
