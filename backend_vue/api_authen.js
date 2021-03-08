const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const user = require("./models/user");
const constants = require("./constant");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const result = await user.findOne({ where: { username: username } });
  try {
    if (result) {
      if (bcrypt.compareSync(password, result.password)) {
        res.json({
          result: constants.kResultOk,
          message: JSON.stringify(result),
        });
      } else {
        res.json({ result: constants.kResultNok, message: "Invalid password" });
      }
    } 
    else {
      res.json({ result: constants.kResultNok, message: "Invalid username" });
    }
  } 
  catch (error) {
    res.json({ result: constants.kResultNok, message: JSON.stringify(error) });
  }
});

router.post("/register", async (req, res) => {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 8);
    const result = await user.create(req.body);
    res.json({ result: constants.kResultOk, message: JSON.stringify(result) });
  } catch (error) {
    res.json({ result: constants.kResultNok, message: JSON.stringify(error) });
  }
})

module.exports = router;

// console.log("Resgin" + "ttttttt" + JSON.stringify(req.body))
// req.body.password = bcrypt.hashSync(req.body.password, 8);
// const result =  await user.create(req.body)
// res.json({ result:"register",message:result});
// res.json({result: constants.kResultNok, message: JSON.stringify(error)} )
