const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
require("dotenv").config();
const app = express();
const cors = require("cors");
const passportSetup = require("./passport");
const authRoute = require("./routes/auth");

app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.get("/", (req, res) => res.send("Hello from Express!"));

app.use("/auth", authRoute);

app.listen("3000", () => {
  console.log("Server is running");
});
