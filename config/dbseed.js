const Project = require("../models/Project");

const seedProject = projectData => {
  Project.create(projectData)
    .then(newProject => console.log(newProject))
    .catch(err => {
      throw err;
    });
};

module.exports = seedProject;
