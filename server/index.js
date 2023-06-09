const express = require("express");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");

const app = express();
app.use(express.json());

// const secretKey = "admin";
// const users = [
//   {
//     id: 1,
//     username: "admin",
//     password: "admin",
//   }, // hashed password for 'admin'
// ];

// Enable CORS
app.use(cors());

// Login endpoint
// app.post("/api/login", (req, res) => {
//   const { username, password } = req.body;

//   // Find the user in the simulated database
//   const user = users.find((user) => user.username === username);

//   if (!user) {
//     return res.status(404).json({ error: "User not found" });
//   }

//   // Compare the password using bcrypt
//   bcrypt.compare(password, user.password, (err, isMatch) => {
//     if (err || isMatch) {
//       return res.status(401).json({ error: "Invalid username or password" });
//     }

//     // Generate JWT token
//     const token = jwt.sign(
//       { id: user.id, username: user.username },
//       secretKey,
//       { expiresIn: "1h" }
//     );

//     res.json({ token });
//   });
// });

// app.get("/", (req, res) => {
//   res.send("Hello world Ranjan");
// });

app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
