//This folder hols the logic for handeling authentication
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const secretKey = "admin";

const users = [
  {
    id: 1,
    username: "admin",
    password: "admin",
  }, // hashed password for 'admin'
];

//LOGIN endpoint

const login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username);

  if (!user) {
    return res.status(400).json({ error: "user not found" });
  }

  // Compare the password using bcrypt
  bcrypt.compare(password, user.password, (err, isMatch) => {
    if (err || isMatch) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, username: user.username },
      secretKey,
      { expiresIn: "5s" }
    );

    res.json({ token });
  });
};
module.exports = {
  login,
};
