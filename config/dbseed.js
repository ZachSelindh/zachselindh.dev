const Project = require("../models/Project");

const seedProject = projectData => {
  var projObj = {
    title: projectData[0],
    gifLocation: projectData[1],
    description: projectData[2],
    completed_date: projectData[3],
    technologies: projectData[4]
  };
  Project.create(projObj)
    .then(newProject => console.log(newProject))
    .catch(err => {
      throw err;
    });
};

module.exports = seedProject;
