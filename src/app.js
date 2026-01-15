const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req,res) => {
   const user = new User({
    firstName: "Anushka",
    lastName: "Singh",
    emailId: "anushk@singh.com",
    password: "anushka@123"
   });

   try {await user.save();
   res.send("User Added Successfully!!");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

connectDB().then(() => {
  console.log("Database connection established...");
  app.listen(8080, () => {
    console.log("Server is successfully running on port 8080...");
});
}).catch(err => {
   console.error("Database cannot be connected!!")
});

