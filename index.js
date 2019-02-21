const app = require("express")();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const passport = require("passport");

const authHelpers = require("./helpers/Auth");
const authRoutes = require("./routes/auth");
const apiRoutes = require("./routes/api");
const keys = require("./keys");
const PORT = process.env.PORT || 5000;

require("./services/passport");


app.use(morgan("combined"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.COOKIE_KEY]
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.MONGO_URI, { useNewUrlParser: true });

app.use("/auth", authRoutes);
app.use("/api", authHelpers.requireLogin, apiRoutes);

app.listen(PORT, () => console.log("RUNNING ON PORT: " + PORT));
