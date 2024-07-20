const { BaseUser, Admin, User, Snapper } = require("../model/User");
const profilePicController = require("./profilePicController");
const bcrypt = require("bcrypt");

const getProfile = async (req, res, next) => {
  if (!req?.id)
    return res.status(400).json({ message: "BaseUser ID required" });
  const baseUser = await BaseUser.findById(req.id)
    .select("-password -refreshToken -role")
    .exec();
  if (!baseUser) {
    return res.status(404).json({ message: "BaseUser not found" });
  }
  const profilePic = await profilePicController.getProfilePic(req.id);
  const response = {
    ...baseUser.toObject(),
    profilePic: profilePic,
  };
  res.status(200).json(response);
};

const setProfile = async (req, res, next) => {
  console.log(req.params);
  const { field } = req.params;
  const { id, role } = req;
  let user;
  if (role === "Admin") {
    user = await Admin.findById(id).exec();
  } else if (role === "User") {
    user = await User.findById(id).exec();
  } else if (role === "Snapper") {
    user = await Snapper.findById(id).exec();
  } else {
    return res.status(400).json({ message: "Invalid user role" });
  }
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  if (user.toObject().hasOwnProperty(field)) {
    if (field === "password") {
      const { oldPassword, newPassword } = req.body;
      const match = await bcrypt.compare(oldPassword, user.password);
      if (!match) {
        return res.status(400).json({ message: "Incorrect old password" });
      }
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
      await user.save();
      return res.status(200).json({ message: "Password updated successfully" });
    }
    const restrictedFields = [
      "email",
      "refreshToken",
      "role",
      "approved",
      "reliability",
    ];
    if (!restrictedFields.includes(field)) {
      user[field] = req.body[field];
      await user.save();
      return res.status(200).json({ message: "Profile updated successfully" });
    }
    return res.status(400).json({ message: "Cannot update this field" });
  }

  return res.status(400).json({ message: "Invalid field specified" });
};

module.exports = { getProfile, setProfile };
