const express = require('express');
const {
  updatePersonalInfo,
  updateEducation,
  updateSkills,
  updateProjects,
  updateExperience,
  addEducationEntries
} = require('../controllers/userController');

const router = express.Router();

router.post('/personalpg-homepg', updatePersonalInfo);
router.post('/educationpg-homepg', updateEducation);
router.post('/skillpg-homepg', updateSkills);
router.post('/projectpg-homepg', updateProjects);
router.post('/experiencepg-homepg', updateExperience);
router.post('/education', addEducationEntries); 

module.exports = router;