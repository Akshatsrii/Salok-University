const express = require("express");
const router = express.Router();

const {
  createAdmission,
  getAllAdmissions,
  updateStatus,
  getByEmail,
  getByStatus
} = require("../controllers/admissionController");

router.post("/", createAdmission);
router.get("/", getAllAdmissions);
router.put("/:id", updateStatus);

// 👇 Corrected routes
router.get("/email/:email", getByEmail);
router.get("/status/:status", getByStatus);

module.exports = router;
