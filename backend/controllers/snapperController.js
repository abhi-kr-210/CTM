const { Snapper } = require("../model/User");
const profilePicController = require("./profilePicController");

const getAllSnappers = async (req, res, next) => {
  const snappers = await Snapper.find({}, "fullname email").exec();
  res.status(200).json(snappers);
};

const getSnapper = async (req, res, next) => {
  console.log(req.params);
  if (!req?.params?.id)
    return res.status(400).json({ message: "Snapper ID required" });
  const snapper = await Snapper.findById(req.params.id)
    .select("-password -refreshToken -role")
    .exec();

  if (!snapper) {
    return res.status(404).json({ message: `Snapper not found` });
  }
  const profilePic = await profilePicController.getProfilePic(req.id);
  const response = {
    ...snapper.toObject(),
    profilePic: profilePic,
  };
  res.status(200).json(response);
};

const addSnapper = async (req, res, next) => {
  console.log(req.body);
  const {
    fullname,
    email,
    password,
    address,
    dateOfBirth,
    minQualifications,
    photographyStyle,
    experience,
    camerasAvailable,
    profilePic,
    samplePhotos,
    languages,
  } = req.body;
  if (!fullname || !email || !password) {
    return res
      .status(400)
      .json({ message: "Fullname, email, and password are required." });
  }
  const duplicate = await Snapper.findOne({ email }).exec();
  if (duplicate) return res.sendStatus(409);

  const snapper = new Snapper({
    fullname,
    email,
    password,
    address,
    dateOfBirth,
    minQualifications,
    photographyStyle,
    experience,
    camerasAvailable,
    profilePic,
    samplePhotos,
    languages,
    role: "Snapper",
  });
  await snapper.save();
  res.status(201).json({ snapperId: snapper._id });
};

const updateSnapper = async (req, res, next) => {
  console.log(req.params);
  console.log(req.body);
  if (!req?.params?.id)
    return res.status(400).json({ message: "Snapper ID required" });
  const { id } = req.params;
  const updateData = req.body;
  const snapper = await Snapper.findById(id).exec();
  if (!snapper) {
    return res.status(404).json({ message: "Snapper not found" });
  }
  const updatedSnapper = await Snapper.findByIdAndUpdate(
    id,
    { $set: updateData },
    { new: true }
  );
  if (!updatedSnapper) {
    return res.status(500).json({ message: "Failed to update snapper" });
  }
  res.status(200).json(updatedSnapper);
};

const deleteSnapper = async (req, res, next) => {
  console.log(req.params);
  if (!req?.params?.id)
    return res.status(400).json({ message: "Snapper ID required" });
  const { id } = req.params;
  const snapper = await Snapper.findById(id).exec();
  if (!snapper) {
    return res.status(404).json({ message: "Snapper not found" });
  }
  await Snapper.deleteOne({ _id: id });
  res.status(204).send();
};

module.exports = {
  getAllSnappers,
  getSnapper,
  addSnapper,
  updateSnapper,
  deleteSnapper,
};
