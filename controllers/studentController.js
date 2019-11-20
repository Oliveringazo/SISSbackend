const model = require('../models/studentModel');

const getAllStudents=function(req,res){
    model.findAll().then((students)=>{
       res.json(students);
    }).catch(err=>{
            res.status(500).send(err);
        });
    }

 const createStudent=function(req,res){
    model.add(req.body).then((student)=>{
       res.status(200).send('Customer created');
    }).catch(err=>{
            res.status(500).send('Error creating Student bc of '+err);
    });
 }

exports.getAllStudents=getAllStudents;
exports.createStudent=createStudent;