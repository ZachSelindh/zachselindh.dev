const Project = require("../models/Project");

const seedProject = projectData => {
  var projObj = {
    title: projectData[0],
    gif_location: projectData[1],
    description: projectData[2],
    completed_date: projectData[3],
    technologies: projectData[4],
    github_link: projectData[5],
    deployed_link: projectData[6]
  };
  Project.create(projObj)
    .then(newProject => console.log(newProject))
    .catch(err => {
      throw err;
    });
};

module.exports = seedProject;
