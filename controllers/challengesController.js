const Challenge = require("../models/Challenge");

// @description: Get all Challenges
// @route: GET /challenges
// @access: Private
exports.getChallenges = async (req, res, next) => {
  try {
    const challenges = await Challenge.find();
    res
      .status(200)
      .json({ sucess: true, results: challenges.length, data: challenges });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @description: Create a new Challenge
// @route: POST /challenges
// @access: Private
exports.createChallenge = async (req, res, next) => {
  try {
    const newChallenge = await Challenge.create(req.body);
    res.status(200).json({ success: true, data: newChallenge });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @description: Deleta a Challenge
// @route: DELETE /challenges
// @access: Private
exports.deleteChallenge = async (req, res, next) => {
  try {
    const challengeToDelete = await Challenge.findByIdAndDelete(req.params.id);

    if (!challengeToDelete) {
      return res.status(400).json({ success: false });
    }

    res
      .status(200)
      .json({ success: true, deleted_Challenge: challengeToDelete });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @description: Deleta a Challenge
// @route: PUT /challenges
// @access: Private
exports.updateChallenge = async (req, res, next) => {
  try {
    const challengeToUpdate = await Challenge.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res
      .status(200)
      .json({ sucess: true, updated_challenge: challengeToUpdate });

    if (!challengeToUpdate) {
      return res.status(400).json({ success: false });
    }
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
