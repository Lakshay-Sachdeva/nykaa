const express = require("express");
const passport = require("./configs/passport");

const { login, register } = require("./controllers/auth.controller");
const userController = require("./controllers/user.controller");
const productController = require("./controllers/product.controller");

const app = express();
app.use(express.json());

app.use(passport.initialize());
// app.use("/users", userController) // /register /login

passport.serializeUser(function ({ user, token }, done) {
  done(null, { user, token });
});
passport.deserializeUser(function (user, done) {
  done(err, user);
});

app.use("/users", userController);
app.use("/products", productController);
app.use("/login", login);
app.post("/register", register);

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/google/failure",
    successRedirect: "/",
  }),
  function (req, res) {
    return res.status(201).json({ user: req.user.user, token: req.user.token });
  }
);

app.get("/auth/google/failure", function (req, res) {
  return res.send("Something went wrong");
});

module.exports = app;
