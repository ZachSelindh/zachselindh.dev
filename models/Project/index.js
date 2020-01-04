const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: { type: String, required: true },
  giflocation: { type: String, require: true },
  description: { type: String, required: true },
  completed_date: { type: Date /* , required: true */ },
  technologies: { type: Object, required: true }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
