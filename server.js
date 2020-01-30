const express = require("express");
const path = require("path");

const app = express();

// Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "client/public")));

const routes = require("./routes");
app.use(routes);

const connection = require("./config/connection");
const seedProject = require("./config/dbSeed");
const projectData = JSON.parse(require("./dbData/index.json"));

connection
  .then(() => console.log("Database connected"))
  // Run function seedProject on each item in seed file.
  .then(projectData.forEach(data => seedProject(data)))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 3001;

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
