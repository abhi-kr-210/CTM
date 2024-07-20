const { BaseUser } = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const handleLogin = async (req, res, next) => {
  const { email, password } = req.body;
  console.log("\x1b[33m%s\x1b[0m", "Received login request");
  console.log("\x1b[36m%s\x1b[0m", "Email:", email);
  if (!email || !password) {
    console.log("\x1b[31m%s\x1b[0m", "Missing email or password");
    return res.status(400).json({ message: "Email and Password are required" });
  }
  const user = await BaseUser.findOne({ email }).exec();
  if (!user) {
    console.log("\x1b[31m%s\x1b[0m", "User not found");
    return res.status(401).json({ message: "User not found" });
  }
  console.log("\x1b[32m%s\x1b[0m", "User found");
  const match = await bcrypt.compare(password, user.password);
  if (match) {
    console.log("\x1b[32m%s\x1b[0m", "Password match");
    const accessToken = jwt.sign(
      {
        UserInfo: {
          id: user._id,
          role: user.role,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "10m" }
    );
    const refreshToken = jwt.sign(
      { id: user._id },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    user.refreshToken.push(refreshToken);
    await user.save();
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000,
    });
    return res.status(200).json({ accessToken });
  } else {
    console.log("\x1b[31m%s\x1b[0m", "Password does not match");
    return res.status(401).json({ message: "Password does not match" });
  }
};

module.exports = { handleLogin };
