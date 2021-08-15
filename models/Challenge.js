const mongoose = require("mongoose");

const ChallengeSchema = new mongoose.Schema({
  // Username
  username: {
    type: String,
    required: true,
  },

  // Challenge Name
  challenge_name: {
    type: String,
    required: true,
  },

  // Challenge Description
  challenge_description: {
    type: String,
    required: true,
  },

  // Date Created
  data_created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Challenge", ChallengeSchema);
