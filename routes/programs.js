const express=require('express')
const router = express.Router();

const socialProgramController=require('../controllers/socialProgramController');
//router.use(express.json());

router.get('/getAllPrograms',socialProgramController.getAllSocialPrograms);
router.post('/newProgram',socialProgramController.createSocialPrograms);


module.exports=router