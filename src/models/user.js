const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 6,
  },
  lastName: {
    type: String,
  },
  emailId: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 18,
  },
  gender: {
    type: String,
    validate(value){
      if(!["male","female","others"].includes(value)) {
        throw new Error ("Gender data is not valid");
      }
    }, 
  },
  photoUrl: {
    type: String,
    default: "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png"
  },
  about: {
    type: String,
    default: "This is a default about of the user!"
  },
  skills: {
    type: [String],
  },

},{
  timestamps: true,
});  

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
