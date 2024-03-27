const Thought = require("../models/Thought");

exports.createThought = async (req, res) => {
  try {
    const thought = await Thought.create(req.body);
    res.status(201).json(thought);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.status(200).json(thoughts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getSingleThought = async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.id);
    if (!thought) {
      return res.status(404).json({ message: "Thought not found" });
    }
    res.status(200).json(thought);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateThought = async (req, res) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedThought) {
      return res.status(404).json({ message: "Thought not found" });
    }
    res.status(200).json(updatedThought);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteThought = async (req, res) => {
  try {
    const deletedThought = await Thought.findByIdAndDelete(req.params.id);
    if (!deletedThought) {
      return res.status(404).json({ message: "Thought not found" });
    }
    res.status(200).json({ message: "Thought deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};