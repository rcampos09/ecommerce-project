const express = require("express");

const router = express.Router();

// Middleware: validations
const {authCheck, adminCheck } = require("../middlewares/auth");

// Controller
const { createOrUpdateUser, currentUser } = require("../controllers/");

// endpoints router
router.post("/create-or-update-user", authCheck , createOrUpdateUser);
router.post("/current-user", authCheck, currentUser);
router.post("/current-admin", authCheck, adminCheck, currentUser);

module.exports = router;