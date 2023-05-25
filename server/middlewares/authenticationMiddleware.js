const jwt = require("jsonwebtoken");
const secretKey = "admin";

const authenticate = (req, rex, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "no token provided" });
  }

  // verfiy the token
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(400).json({ error: "Inavlid token" });
    }

    //add the decoded token to the request object
    req.user = decoded;
    next();
  });
};

module.exports = {
  authenticate,
};
