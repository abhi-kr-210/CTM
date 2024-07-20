const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const baseUserSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: [String],
      default: [],
    },
    role: {
      type: String,
      required: true,
      enum: ["Admin", "User", "Snapper"],
    },
  },
  { discriminatorKey: "role", timestamps: true }
);

const adminSchema = new Schema({});

const userSchema = new Schema({
  address: {
    type: String,
    default: "Not provided",
  },
  dateOfBirth: {
    type: Date,
    default: null,
  },
});

const snapperSchema = new Schema({
  address: {
    type: String,
    default: "Not provided",
  },
  dateOfBirth: {
    type: Date,
    default: null,
  },
  minQualifications: {
    type: String,
    default: "Not specified",
  },
  photographyStyle: {
    type: [String],
    default: [],
  },
  experience: {
    type: Number,
    default: 0,
  },
  camerasAvailable: {
    type: [String],
    default: [],
  },
  samplePhotos: {
    type: [String],
    default: [],
  },
  languages: {
    type: [String],
    default: [],
  },
  approved: {
    type: Boolean,
    default: false,
  },
  reliability: {
    type: Number,
    default: 0,
  },
});

const BaseUser = mongoose.model("BaseUser", baseUserSchema);
const Admin = BaseUser.discriminator("Admin", adminSchema);
const User = BaseUser.discriminator("User", userSchema);
const Snapper = BaseUser.discriminator("Snapper", snapperSchema);

module.exports = { BaseUser, Admin, User, Snapper };
