const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  
  email: {
    type: String, 
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  
  password: {
    type: String
  },

  googleAccount: {
    type: Boolean
  },

  profilePicture: {
    type: String
  },
  itinerariesLiked: {
    type: Array
  }
});

module.exports = User = mongoose.model("user", userSchema);



