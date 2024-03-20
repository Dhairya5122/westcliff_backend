const express = require("express");
const mongoose = require("mongoose");

const { check, validationResult } = require("express-validator");

const router = express.Router();

router.get("/registration");

const Registration = mongoose.model("Registration");

if (errors.isEmpty()) {
  const registration = new Registration(req.body);
  registration
    .save()
    .then(() => {
      res.send("Thankyou");
    })
    .catch((err) => {
      console.log(err);
      res.send("Sorry! Something went wrong");
    });
} else {
  console.log("please try again later");
}
