const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db");

// Load env variables
dotenv.config({ path: "./config/config.env" });

// Connect to the database
connectDB();

// Importing the challenges routes
const challengesRoutes = require("./routes/challengeRoutes");

const PORT = process.env.PORT || 8000;

const app = express();

// Body Parser
app.use(express.json());

app.use("/challenges", challengesRoutes);

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode, on PORT ${PORT}`.cyan.bold
      .underline
  )
);
