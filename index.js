const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

// Use CORS to allow requests from the frontend
app.use(
  cors({
    origin: "https://front-omega-gilt.vercel.app", // Update this to your frontend's URL
    credentials: true,
  })
);

// Use cookie-parser middleware
app.use(cookieParser());

app.get("/", (req, res) => {
  res.cookie("token", "my_secure_token", {
    // sameSite: "None",
    path: "/",
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    httpOnly: true, // Set to true for security, false for frontend access
    // secure: false, // Set to true in production with HTTPS
  });
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

app.get("/endpoint", (req, res) => {
  console.log("Cookies: ", req.cookies);
  res.json({ message: "Cookie received", cookies: req.cookies });
});

app.listen(3003, () => {
  console.log("Server running on port 3003");
});
