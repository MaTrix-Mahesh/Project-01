let express = require("express");
const { register } = require("../controllers/auth.controller");
const router = express.Router();

router.get("/",register)

module.exports = router;