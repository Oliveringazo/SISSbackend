const model = require('../models/socialProgramModel');

const getAllSocialPrograms=function(req,res){
    model.findAll().then((programs)=>{
       res.json(programs);
    }).catch(err=>{
            res.status(500).send(err);
        });
    }

    
const createSocialPrograms = function (req,res){
    model.add(req.body).then((programs)=>{
        res.status(200).send('Program created');
    }).catch(err=>{
            res.status(500).send('Error creating employee bc of'+err);
    });
};

exports.getAllSocialPrograms=getAllSocialPrograms;
exports.createSocialPrograms=createSocialPrograms;