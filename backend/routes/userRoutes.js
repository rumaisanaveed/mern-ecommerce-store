const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  updateUserProfile,
  getAllUsers,
} = require("../controllers/userController");
const validateToken = require("../middleware/validateToken");
const authorizeAdmin = require("../middleware/authorizeAdmin");
const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/logout", logoutUser);

router.get("/current", validateToken, getCurrentUser);

router.get("/all", validateToken, authorizeAdmin, getAllUsers);

router.put("/update-profile", validateToken, updateUserProfile);

module.exports = router;
