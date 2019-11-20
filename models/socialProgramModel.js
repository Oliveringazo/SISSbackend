const db = require('../models/database/db.js');

async function findAll()
 {
    let socialPrograms = await db.Social_Progam.findAll();
    return socialPrograms;  
};

async function findById(identificador)
 {
    let socialPrograms = await db.Social_Progam.findAll({
        where:
        {
            id:identificador
        }
    });
    
    return socialPrograms;
};

async function add(data){
    db.Social_Progam.create({
        name:data.name,
        room:data.room,
        members:data.members,
        hours_to_do:data.hoursToDo,
        objective:data.objective,
        activities: data.activities,
        supervisor: data.supervisor
       
    }).then(()=>{
        console.log('Social program created');
    }).catch(err =>{
        console.log(err);
    }).then(()=>{
        console.log('Cerrando conexion');
        //db.sequilize.close();
    });
}
exports.add=add;
exports.findAll=findAll;
exports.findById=findById;