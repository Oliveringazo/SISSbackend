const express=require('express')
const router = express.Router();
router.use(express.json());
const studentController=require('../controllers/studentController');

router.get('/getAllStudents',studentController.getAllStudents);
//router.get('/getCurrentStudentInfo',studentController.createSocialPrograms);
router.post('/newStudent',studentController.createStudent);

module.exports=router