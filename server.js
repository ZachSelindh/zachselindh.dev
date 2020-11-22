const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();

// Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.ENVIRONMENT === "development") {
  // Dev route
  app.use(express.static(path.join(__dirname, "client/public")));
} else if (process.env.ENVIRONMENT === "production") {
  // Build route
  app.use(express.static(path.join(__dirname, "client", "build")));
}

const routes = require("./routes");
app.use(routes);

const PORT = process.env.PORT || 3001;

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
