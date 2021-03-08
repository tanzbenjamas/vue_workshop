const express = require("express");
const router = express.Router();

router.get("/login", async (req, res) => {
  res.json({
    result: "ok",

  });
});


module.exports = router;
