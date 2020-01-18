const Project = require("../models/Project");

const seedProject = projectData => {
  Project.findOne({ title: projectData[0] })
    .then(foundProj => {
      if (!foundProj) {
        Project.create({
          title: projectData[0],
          gif_location: projectData[1],
          description: projectData[2],
          completed_date: projectData[3],
          technologies: projectData[4],
          github_link: projectData[5],
          deployed_link: projectData[6]
        })
          .then(newProject =>
            console.log(`${newProject.title}` + " was created successully.")
          )
          .catch(err => {
            throw err;
          });
      } else if (foundProj) {
        Project.updateOne(
          { title: projectData[0] },
          {
            title: projectData[0],
            gif_location: projectData[1],
            description: projectData[2],
            completed_date: projectData[3],
            technologies: projectData[4],
            github_link: projectData[5],
            deployed_link: projectData[6]
          },
          (err, raw) => {
            if (err) {
              res.send(err);
            }
            console.log(`${projectData[0]} was updated.`);
          }
        );
      }
    })
    .catch(err => console.log(err));
};

module.exports = seedProject;
