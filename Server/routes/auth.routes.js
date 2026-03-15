let express = require("express");

const { register, login, logout, profile } = require("../controllers/auth.controller");
const { authmiddleware } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/me", authmiddleware, profile);

module.exports = router;