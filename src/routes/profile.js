const express = require("express");
const profileRouter = express.Router();

const userAuth  = require("../middlewares/auth");
const { validateEditProfileData } = require("../utils/validation");

profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    const user = req.user;

    res.send(user);
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
    if (!validateEditProfileData(req)) {
      throw new Error("Invalid Edit Request");
    }
    const loggedInUser = req.user;

    Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));

    await loggedInUser.save();

    res.json({
      message: `${loggedInUser.firstName}, your profile updated successfully`,
      data: loggedInUser,
    });
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

profileRouter.patch("/profile/verify", userAuth, async (req, res) => {
  try {
    const user = req.user;
    
    const techKeywords = ["react", "node", "js", "java", "python", "css", "html", "sql", "aws", "devops"];

    const hasTechSkill = user.skills.some(skill => 
      techKeywords.some(keyword => skill.toLowerCase().includes(keyword))
    );

    if (user.skills.length < 3 || !hasTechSkill) {
      throw new Error("Add at least 3 skills, including at least one core tech skill (e.g. React, Node, etc.)");
    }

    user.isVerifiedDev = true;
    await user.save();

    res.json({ message: "Verified!", data: user });
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});

module.exports = profileRouter;
