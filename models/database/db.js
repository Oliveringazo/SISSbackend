require('dotenv').config();
const Sequelize = require('sequelize');
//const sequelize = new Sequelize(process.env.DATABASE_NAME,process.env.DATABASE_USER,process.env.DATABASE_PASSWORD,{host: 'localhost',dialect: 'mysql'});
const sequelize = new Sequelize('sissdb','root','11MARmorella',{host: 'localhost',dialect: 'mysql'});

const Student=sequelize.define('student',{
    name:{
        type: Sequelize.STRING,
        allowNull: true
    },
    password:{
        type: Sequelize.STRING,
        allowNull: true

    },
    social_service_status:{
        type: Sequelize.STRING,
         allowNull: true
    },
    credits_per_current_career:{
        type: Sequelize.STRING,
         allowNull: true
    },
    current_credits:{
        type: Sequelize.STRING,
        allowNull: true

    },
    student_status:{
        type: Sequelize.STRING,
         allowNull: true

    },
    has_approved_intro_to_social_service:{
        type: Sequelize.STRING,
         allowNull: true

    },
    email:{
        type: Sequelize.STRING,
         allowNull: true
    },
    phone:{
        type: Sequelize.STRING,
         allowNull: true
    }

});

const Academic_Unit=sequelize.define("academic_unit",{
    name:{
        type: Sequelize.STRING,
        allowNull: true
    },
    password:{
        type: Sequelize.STRING,
        allowNull: true

    },
    phone:{
        type: Sequelize.STRING,
         allowNull: true
    },
    department:{
        type: Sequelize.STRING,
        allowNull: true
    }
});

const Receiving_Unit=sequelize.define("receiving_unit",{
    name:{
        type: Sequelize.STRING,
        allowNull: true
    },
    password:{
        type: Sequelize.STRING,
         allowNull: true
    },
    phone:{
        type: Sequelize.STRING,
        allowNull: true
    },
    address:{
        type: Sequelize.STRING,
         allowNull: true
    },
    sector:{
        type: Sequelize.STRING,
         allowNull: true
    },
    in_charge:{
        type: Sequelize.STRING,
         allowNull: true
    }
});

const Social_Progam=sequelize.define("social_program",{
    name:{
        type: Sequelize.STRING,
         allowNull: true
    },
    room:{
        type: Sequelize.STRING,
         allowNull: true
    },
    members:{
        type: Sequelize.STRING,
        allowNull: true
    },
    accepted_by_academic_unit:{
        type: Sequelize.DATE,
         allowNull: true
    },
    accepted_by_receiving_unit:{
        type: Sequelize.DATE,
         allowNull: true
    },
    hours_to_do:{
        type: Sequelize.STRING,
         allowNull: true
    },
    objective:{
        type: Sequelize.STRING,
         allowNull: true
    },
    activities:{
        type: Sequelize.STRING,
         allowNull: true
    },
    supervisor:{
        type: Sequelize.STRING,
         allowNull: true
    }
});

const Request_to_Join=sequelize.define("request_to_join",{
    sent_at:{
        type: Sequelize.DATE,
        allowNull:true
    },
    status:{
        type: Sequelize.INTEGER,
         allowNull:true
    },
    decided_at:{
        type: Sequelize.DATE,
         allowNull:true
    }
});

const Request_to_Sign_Up_Social_Program=sequelize.define("request_to_sign_up_social_program",{
    sent_at:{
        type: Sequelize.DATE,
        allowNull:true
    },
    status:{
        type: Sequelize.INTEGER,
         allowNull:true
    },
    decided_at:{
        type: Sequelize.DATE,
         allowNull:true
    }
});

Student.belongsToMany(Social_Progam,{through:'students_assigned_to_social_programs',foreignKey:'student_ID'});
Social_Progam.belongsToMany(Student,{through:'students_assigned_to_social_programs',foreignKey:'social_program_ID'});

Receiving_Unit.belongsToMany(Social_Progam,{through:'social_programs_generated_by_receiving_unit',foreignKey:'receiving_unit_ID'});
Social_Progam.belongsToMany(Receiving_Unit,{through:'social_programs_generated_by_receiving_unit',foreignKey:'social_program_ID'});

Student.hasMany(Request_to_Join);
Request_to_Join.belongsTo(Student);

Social_Progam.hasMany(Request_to_Sign_Up_Social_Program);
Request_to_Sign_Up_Social_Program.belongsTo(Social_Progam);

//sequelize.sync();
exports.Student=Student;
exports.Academic_Unit=Academic_Unit;
exports.Receiving_Unit=Receiving_Unit;
exports.Social_Progam=Social_Progam;
exports.Request_to_Join=Request_to_Join;
exports.Request_to_Sign_Up_Social_Program=Request_to_Sign_Up_Social_Program;

