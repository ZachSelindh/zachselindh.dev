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
        }).catch(err => {
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
              throw err;
            }
          }
        );
      }
    })
    .catch(err => {
      throw err;
    });
};

module.exports = seedProject;
