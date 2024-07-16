import { Schema, model } from "mongoose";

const baseUserSchema = new Schema(
  {
    fullname: {
      type: String,
      require: true,
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
    refreshToken: [String],
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
  },
  dateOfBirth: {
    type: Date,
  },
  profilePic: {
    type: String,
  },
});

const snapperSchema = new Schema({
  address: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
  },
  minQualifications: {
    type: String,
  },
  photographyStyle: {
    type: [String],
  },
  experience: {
    type: Number,
  },
  camerasAvailable: {
    type: [String],
  },
  profilePic: {
    type: String,
  },
  samplePhotos: {
    type: [String],
  },
  languages: {
    type: [String],
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

const BaseUser = model("BaseUser", baseUserSchema);
const Admin = BaseUser.discriminator("Admin", adminSchema);
const User = BaseUser.discriminator("User", userSchema);
const Snapper = BaseUser.discriminator("Snapper", snapperSchema);

export default { BaseUser, Admin, User, Snapper };
