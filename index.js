const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(
  cors({
    origin: "https://front-omega-gilt.vercel.app",
    credentials: true,
  })
);

app.use(cookieParser());
app.get("/setCookie", (req, res) => {
  res.cookie("token", Date.parse(new Date()), {
    sameSite: "None",
    path: "/",
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: true,
  });
  res.json("Hello World");
});

app.get("/getCookie", (req, res) => {
  console.log("Cookies: ", req.cookies);
  res.json({ message: "Cookie received", cookies: req.cookies });
});

app.listen(3003, () => {
  console.log("Server running on port 3003");
});
