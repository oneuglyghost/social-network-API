const Reaction = require("../models/Reaction");

exports.createReaction = async (req, res) => {
  try {
    const reaction = await Reaction.create(req.body);
    res.status(201).json(reaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteReaction = async (req, res) => {
  try {
    await Reaction.findByIdAndDelete(req.params.reactionId);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};