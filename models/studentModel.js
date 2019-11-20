const db = require('../models/database/db.js');


async function findAll()
 {
    let students = await db.Student.findAll();
    return students;  
};

async function findInfoOnStudent(email)
 {
    let student = await db.Student.findAll({
             attributes:
                  ['name','social_service_status','credits_per_current_career','current_credits',
                  'student_status','has_approved_intro_to_social_service','email','phone']
            ,
             where:
             {
                email:email
            }
    });
    return Students;  
};

async function add(data){
    db.Student.create({
        name:data.name,
        password:data.password,
        social_service_status:data.social_service_status,
        credits_per_current_career:data.credits_per_current_career,
        current_credits:data.current_credits,
        student_status:data.student_status,
        has_approved_intro_to_social_service:data.has_approved_intro_to_social_service,
        email:data.email,
        phone:data.phone
    }).then(()=>{
        console.log('Customer created');
    }).catch(err =>{
        console.log(err);
    }).then(()=>{
        console.log('Cerrando conexion');
    });
}

exports.findAll=findAll;
exports.findInfoOnStudent=findInfoOnStudent;
exports.add=add;