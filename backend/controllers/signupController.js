const { BaseUser } = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const handleSignup = (role) => async (req, res, next) => {
  const { fullname, email, password } = req.body;
  console.log("\x1b[33m%s\x1b[0m", "Received signup request");
  console.log("\x1b[36m%s\x1b[0m", "Fullname:", fullname);
  console.log("\x1b[36m%s\x1b[0m", "Email:", email);
  if (!fullname || !email || !password) {
    console.log("\x1b[31m%s\x1b[0m", "Missing fullname, email or password");
    return res
      .status(400)
      .json({ message: "All required fields must be provided." });
  }
  const existingUser = await BaseUser.findOne({ email }).exec();
  if (existingUser) {
    console.log("\x1b[31m%s\x1b[0m", "Duplicate email found in database");
    return res.status(409).json({ message: "Email already in use." });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new BaseUser({
    fullname,
    email,
    password: hashedPassword,
    role,
  });
  const accessToken = jwt.sign(
    {
      UserInfo: {
        id: newUser._id,
        role: newUser.role,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "10m" }
  );
  const refreshToken = jwt.sign(
    { id: newUser._id },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "1d" }
  );
  newUser.refreshToken = [refreshToken];
  await newUser.save();
  console.log("\x1b[32m%s\x1b[0m", `New ${role} created successfully`);
  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "None",
    maxAge: 24 * 60 * 60 * 1000,
  });
  res.status(201).json({ accessToken });
};

module.exports = { handleSignup };
