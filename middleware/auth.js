const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  let authHeader = req.headers.authorization;
  if (!authHeader) {
    let err = new Error("Authorixation Failed");
    res.status(400);
    next(err);
  }
  token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    req.user = decoded;
    console.log(req.user);
    next();
  });
};

const verifyAdmin = (req, res, next) => {
  if (req.user.role != "Admin") {
    let err = new Error("YOu are not authorized");
    res.status(403);
    return next(err);
  }
  next();
};
module.exports = { verifyUser, verifyAdmin };
