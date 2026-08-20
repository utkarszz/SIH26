const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

router.get(
   "/dashboard",
  authMiddleware,
  roleMiddleware("STUDENT"),
  (req, res) => {
    res.json({
      message: "Student dashboard",
      userId: req.user.userId,
    });
  }
);

router.get(
  "/attendance",
  authMiddleware,
  roleMiddleware("STUDENT"),
  (req, res) => {
    res.json({
      message: "Student attendance",data: [],
    });
  }
);

router.get(
  "/marks",
  authMiddleware,
  roleMiddleware("STUDENT"),
  (req, res) => {
    res.json({
      message: "Student marks",data: [],
    });
  }
);

router.get(
  "/assignments",
  authMiddleware,
  roleMiddleware("STUDENT"),
  (req, res) => {
    res.json({
      message: "Student assignments",data: [],
    });
  }
);
module.exports = router;