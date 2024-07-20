const { Snapper } = require("../model/User");
const { Rating } = require("../model/Rating");

const getRating = async (req, res) => {
  const { snapperID } = req.params;
  const userID = req.id;
  if (!snapperID)
    return res.status(400).json({ message: "Snapper ID required" });
  const rating = await Rating.findOne({ userID, snapperID });
  if (!rating) {
    return res.status(404).json({ message: "Rating not found" });
  }
  res.status(200).json(rating);
};

const addRating = async (req, res) => {
  const { snapperID } = req.params;
  const userID = req.id;
  const { rating, review } = req.body;
  if (!snapperID)
    return res.status(400).json({ message: "Snapper ID required" });
  const snapper = await Snapper.findById(snapperID);
  if (!snapper) {
    return res.status(404).json({ messge: "Snapper not found" });
  }
  const existingRating = await Rating.findOne({ userID, snapperID });
  if (existingRating) {
    return res.status(409).json({ message: "Already Rated" });
  }
  snapper.ratings[rating - 1] += 1;
  await snapper.save();
  const newRating = new Rating({
    userID,
    snapperID,
    rating,
    review,
  });
  await newRating.save();
  res.status(201).json(newRating);
};

const updateRating = async (req, res) => {
  const { snapperID } = req.params;
  const userID = req.id;
  const { rating, review } = req.body;
  if (!snapperID)
    return res.status(400).json({ message: "Snapper ID required" });
  const existingRating = await Rating.findOne({ userID, snapperID });
  if (!existingRating) {
    return res.status(404).json({ message: "Rating not found" });
  }
  const snapper = await Snapper.findById(snapperID);
  if (snapper) {
    snapper.ratings[existingRating.rating - 1] -= 1;
    snapper.ratings[rating - 1] += 1;
    await snapper.save();
  }
  existingRating.rating = rating;
  existingRating.review = review;
  await existingRating.save();
  res.status(200).json(existingRating);
};

const deleteRating = async (req, res) => {
  const { snapperID } = req.params;
  const userID = req.id;
  if (!snapperID)
    return res.status(400).json({ message: "Snapper ID required" });
  const existingRating = await Rating.findOneAndDelete({ userID, snapperID });
  if (!existingRating) {
    return res.status(404).json({ message: "Rating not found" });
  }
  const snapper = await Snapper.findById(snapperID);
  if (snapper) {
    snapper.ratings[existingRating.rating - 1] -= 1;
    await snapper.save();
  }
  res.status(200).json({ message: "Rating deleted successfully" });
};

module.exports = {
  getRating,
  addRating,
  updateRating,
  deleteRating,
};
