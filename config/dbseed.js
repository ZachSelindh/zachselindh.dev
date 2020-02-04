const Project = require("../models/Project");

module.exports = seedProject = projectData => {
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
