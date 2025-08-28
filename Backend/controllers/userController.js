 
const User = require('../models/user');
// Update Personal Information
exports.updatePersonalInfo = async (req, res) => {
  const { name, profession, city, resumeformemail, phone, linkedin, email, password } = req.body;
  try {
    const updatedUser = await User.findOneAndUpdate(
      { email, password },
      { name, profession, city, resumeformemail, phone, linkedin },
      { new: true }
    );
    res.status(201).json({ success: true, user: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update Education
exports.updateEducation = async (req, res) => {
  const { email, password, education } = req.body;
  try {
    const updatedUser = await User.findOneAndUpdate(
      { email, password },
      { $push: { education: { $each: education } } },
      { new: true, upsert: true }
    );
    res.status(201).json({ success: true, user: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update Skills & Languages
exports.updateSkills = async (req, res) => {
  const { email, password, skills, languagesSelected } = req.body;
  try {
    const updatedUser = await User.findOneAndUpdate(
      { email, password },
      {
        $push: {
          skills: { $each: skills },
          languagesSelected: { $each: languagesSelected }
        }
      },
      { new: true }
    );
    res.status(201).json({ success: true, user: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update Projects
exports.updateProjects = async (req, res) => {
  const { email, password, project } = req.body;
  try {
    const updatedUser = await User.findOneAndUpdate(
      { email, password },
      { $push: { project: { $each: project } } },
      { new: true }
    );
    res.status(201).json({ success: true, user: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update Experience
exports.updateExperience = async (req, res) => {
  const { email, password, experience, professionalSummary } = req.body;
  try {
    const updatedUser = await User.findOneAndUpdate(
      { email, password },
      {
        $push: { experience: { $each: experience } },
        professionalSummary
      },
      { new: true }
    );
    res.status(201).json({ success: true, user: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Add Education Entries (Alternative Endpoint)
exports.addEducationEntries = async (req, res) => {
  const { email, password, educationEntries } = req.body;
  try {
    const updatedUser = await User.findOneAndUpdate(
      { email, password },
      { $push: { education: { $each: educationEntries } } },
      { new: true }
    );
    res.status(201).json({ success: true, user: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
