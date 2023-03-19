const { Users } = require("../models/userModel");
const userRouter = require("express").Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

userRouter.get("/", async (req, res) => {
  let data = await Users.findAll();
  res.send(data);
});

userRouter.post("/signup", async (req, res) => {
  let { email, password } = req.body;
  try {
    bcrypt.hash(password, 5, async function (err, hash) {
      if (err) {
        console.log(err);
      } else {
        await Users.create({ email, password: hash });
        res.send("User Created");
      }
    });
  } catch (e) {
    console.log(e);
  }
});

userRouter.post("/login", async (req, res) => {
  let { email, password } = req.body;
  console.log(req.body);
  let data = await Users.findOne({ email });
  bcrypt.compare(password, data.password).then(function (result) {
    if (result) {
      var token = jwt.sign({ email: email }, "chaitu");
      res.send("Login Successful");
    } else {
      res.send("Wrong Password");
    }
  });
});

module.exports = { userRouter };
