const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    first_name: { type: String, required: false },
    last_name: { type: String, required: false },
    contact: { type: String, required: false },
    email: { type: String, required: false },
    password: { type: String, required: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  bcrypt.hash(this.password, 10, (err, hash) => {
    this.password = hash;
    return next();
  });
});

userSchema.methods.checkPassword = function (password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.password, function (err, same) {
      if (err) return reject(err);

      return resolve(same);
    });
  });
};

const User = model("user", userSchema);
module.exports = User;
