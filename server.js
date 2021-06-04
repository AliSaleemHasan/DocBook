const express = require("express");

const session = require("express-session");

const { connectDB } = require("./db");

const { SESSION_OPTIONS } = require("./config");

const { profile, auth, doctor, settings, verification } = require("./routes");

const { APP_PORT, APP_ORIGIN } = require("./config");

const { notFound } = require("./errors");

connectDB();

const app = express();

app.use(express.json());

app.use(session({ ...SESSION_OPTIONS }));

app.use("/auth", auth);

app.use("/profile", profile);

app.use("/settings", settings);

app.use("/doctor", doctor);

app.use("/email", verification);

app.use(notFound);

app.listen(APP_PORT, () => console.log(`listenin on ${APP_ORIGIN}`));
