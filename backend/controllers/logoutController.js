import { BaseUser } from "../model/User";

const handleLogout = async (req, res, next) => {
  console.log("\x1b[33m%s\x1b[0m", "Received logout request");
  const cookies = req.cookies;
  if (!cookies?.jwt) {
    console.log("\x1b[31m%s\x1b[0m", "Cookie not found");
    return res.sendStatus(204);
  }
  const refreshToken = cookies.jwt;
  const user = await BaseUser.findOne({ refreshToken }).exec();
  if (!user) {
    console.log("\x1b[31m%s\x1b[0m", "User not found");
    res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
    return res.sendStatus(204);
  }
  console.log("\x1b[32m%s\x1b[0m", "User found");
  user.refreshToken = user.refreshToken.filter((rt) => rt !== refreshToken);
  await user.save();
  console.log(
    "\x1b[32m%s\x1b[0m",
    "Refresh token successfully deleted from database"
  );
  res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
  res.sendStatus(200);
};

export default handleLogout;
