const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();
const Project = require("./models/Project");

// Seeding utility
const seedProject = projectData => {
  const {
    title,
    gif_location,
    description,
    completed_date,
    technologies,
    github_link,
    deployed_link
  } = projectData;
  Project.findOne({ title })
    .then(foundProj => {
      if (!foundProj) {
        Project.create({
          title,
          gif_location,
          description,
          completed_date,
          technologies,
          github_link,
          deployed_link
        })
          .then(newProj => res.send(newProj))
          .catch(err => {
            throw err;
          });
      } else if (foundProj) {
        Project.updateOne(
          { title },
          {
            title,
            gif_location,
            description,
            completed_date,
            technologies,
            github_link,
            deployed_link
          },
          (err, raw) => {
            if (err) {
              res.send(err);
            }
          }
        );
      }
    })
    .catch(err => res.send(err));
};

const projectData = require("./dbData/index.json");
const parsedData = JSON.parse(JSON.stringify(projectData));

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

const connection = require("./config/connection");

connection
  .then(() => console.log("Database connected"))
  .then(parsedData.projects.forEach(data => seedProject(data)))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 3001;

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
