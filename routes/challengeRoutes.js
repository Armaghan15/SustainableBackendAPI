const express = require("express");
const router = express.Router();

// Import Challenge Controllers
const {
  getChallenges,
  createChallenge,
  deleteChallenge,
  updateChallenge,
} = require("../controllers/challengesController");

// Get and Post Request to "/"
router.route("/").get(getChallenges).post(createChallenge);

// Delete and Put request
router.route("/:id").put(updateChallenge).delete(deleteChallenge);

module.exports = router;
