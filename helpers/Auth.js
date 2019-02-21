const mongoose = require("mongoose");
const User = require("../models/User");

exports.signUp = (req, res, next) => {
  const { username, password } = req.body;
  User.findOne({ username })
    .then(user => {
      if (user) {
        return res.status(422).json({ err: "Usuário ja existe" });
      }

      const newUser = new User({ username, password });
      newUser
        .save()
        .then(user => next())
        .catch(err => res.status(422).json(err));
    })
    .catch(err => res.status(422).json(err));
};

exports.getUser = (req, res) => {
  res.send(req.user);
};

exports.requireLogin = (req, res, next) => {
  if (!req.user) {
    return res
      .status(422)
      .json("Você deve estar logado para completar essa ação");
  }
  next();
};
