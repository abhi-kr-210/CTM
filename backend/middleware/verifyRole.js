const verifyRole = (allowedRole) => {
  return (req, res, next) => {
    if (!req?.role) {
      console.log("\x1b[31m%s\x1b[0m", "Role not provided");
      return res.sendStatus(401);
    }
    if (req.role !== allowedRole) {
      console.log("\x1b[31m%s\x1b[0m", "Role is unauthorized");
      return res.sendStatus(401);
    }
    console.log("\x1b[32m%s\x1b[0m", " Role is authorized");
    next();
  };
};

module.exports = { verifyRole };
