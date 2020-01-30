const Project = require("../models/Project");

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
          .then(newProject =>
            console.log(`${newProject.title}` + " was created successully.")
          )
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
            console.log(`${projectData[0]} was updated.`);
          }
        );
      }
    })
    .catch(err => console.log(err));
};

module.exports = seedProject;
