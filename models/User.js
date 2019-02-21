const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: "You must provide a username" },
  password: { type: String, required: "You must provide a password" },
  createdAt: { type: Date, default: Date.now() }
});

userSchema.pre("save", function(next) {
  const user = this;
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(user.password, salt, function(err, hash) {
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) {
      return callback(err);
    }
    return callback(null, isMatch);
  });
};

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
