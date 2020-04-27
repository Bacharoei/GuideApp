const express = require("express");
const router = express.Router();

const {
  getAllGuides,
  createGuide,
  getSingleGuide,
  updateGuide,
  deleteGuide,
} = require("../controller/guides");

router.get("/", getAllGuides);
router.get("/:_id", getSingleGuide);
router.patch("/:_id", updateGuide);
router.delete("/:_id", deleteGuide);
router.post("/", createGuide);

module.exports = router;
