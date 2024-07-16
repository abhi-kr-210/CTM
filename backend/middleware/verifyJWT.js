import { verify } from "jsonwebtoken";

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    console.log(
      "\x1b[31mJWT Error:\x1b[0m Authorization header missing or invalid format"
    );
    return res.sendStatus(401);
  }
  const token = authHeader.split(" ")[1];
  verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log("\x1b[31mJWT Error:\x1b[0m", err.message);
      return res.sendStatus(403);
    }
    req.id = decoded.UserInfo.id;
    req.role = decoded.UserInfo.role;
    console.log("\x1b[32mJWT Verified\x1b[0m");
    next();
  });
};

export default verifyJWT;
