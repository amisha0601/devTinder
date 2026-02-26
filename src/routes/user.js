const express = require("express");
const userRouter = express.Router();

const { userAuth } = require("../middlewares/auth");
const User = require("../models/user");

userRouter.get("/feed", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;

    const users = await User.find({
      _id: { $ne: loggedInUser._id },
    });

    res.send(users);
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

module.exports = userRouter;