const express = require("express");
const router = express.Router();
const user = require("./models/user");

router.get("/login", async (req, res) => {
  res.json({
    result: "ok",

  });
});


module.exports = router;
