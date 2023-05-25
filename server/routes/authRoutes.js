const express = require("express");
const authController = require("../controllers/authController");
const authenticationMiddleware = require("../middlewares/authenticationMiddleware");

const router = express.Router();

//Login route
router.post("/login", authController.login);

router.get("/protected", authenticationMiddleware.authenticate, (req, res) => {
  res.json({ message: "you are authorized to access this protected route" });
});

module.exports = router;
