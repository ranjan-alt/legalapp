const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
const app = express()
app.use(express.json())


const secretKey = "ranjansah";
const users = [
    { id: 1, username: 'admin', password: '$2a$10$dtBO3GsYvIz5Btv7I6SE4eK4w38u/Yy9FG1Qh9fr9eWV2sPHVQPOe' } // hashed password for 'admin'
  ];

//Login endpoint
app.post("/api/login", (req,res)=>{
    const {username, password} = req.body



//find the user in simulated database
const user = users.find((user)=>user.username === username)

if(!user){
    return res.status(404).json({error:"User not found"})
}

 // Compare the password using bcrypt
 bcrypt.compare(password, user.password, (err, isMatch) => {
    if (err || !isMatch) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });

    res.json({ token });
  });
})


app.get("/", (req,res)=>{
    res.send("hello world ranjan")
})

app.listen(5000, ()=>{
    console.log("server islisting in port number 5000")
})