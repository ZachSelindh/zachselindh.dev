const express = require("express");
const path = require("path");

const app = express();

// Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* app.use(express.static(path.join(__dirname, "client/public"))); */
app.use(express.static(path.join(__dirname, "client", "build")));

const routes = require("./routes");
app.use(routes);

const connection = require("./config/connection");
const seedProject = require("./config/dbSeed");
const projectData = require("./dbData/index.json");
const parsedData = JSON.parse(JSON.stringify(projectData));

connection
  .then(() => console.log("Database connected"))
  .then(parsedData.projects.forEach(data => seedProject(data)))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 3001;

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
