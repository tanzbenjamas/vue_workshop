const express = require("express");
const router = express.Router();
const cors = require("cors");

router.use(require("./api_auth"));
router.use(require("./api_product"));

module.exports = router;
