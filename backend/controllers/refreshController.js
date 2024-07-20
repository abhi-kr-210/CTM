const { BaseUser } = require("../model/User");
const jwt = require("jsonwebtoken");

const handleRefresh = async (req, res, next) => {
  const cookies = req.cookies;
  console.log("\x1b[33m%s\x1b[0m", "Received refresh request");
  if (!cookies?.jwt) {
    console.log("\x1b[31m%s\x1b[0m", "Cookie not found");
    return res.status(401).json({ message: "Cookie not found" });
  }
  const oldRefreshToken = cookies.jwt;
  const user = await BaseUser.findOne({ refreshToken: oldRefreshToken }).exec();
  if (!user) {
    console.log("\x1b[31m%s\x1b[0m", "User not found");
    return res.sendStatus(403).json({ message: "User not found" });
  }
  console.log("\x1b[32m%s\x1b[0m", "User found");
  const newRefreshToken = jwt.sign(
    { id: user._id },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "1d" }
  );
  user.refreshToken = user.refreshToken.map((rt) =>
    rt === oldRefreshToken ? newRefreshToken : rt
  );
  await user.save();
  console.log(
    "\x1b[32m%s\x1b[0m",
    "Successfully updated user's refresh tokens"
  );
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
  res.cookie("jwt", newRefreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "None",
    maxAge: 24 * 60 * 60 * 1000,
  });
  res.status(200).json({ accessToken });
};

module.exports = { handleRefresh };
