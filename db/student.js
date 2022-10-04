const Sequelize = require("sequelize");
const db = require("./db");

const Student = db.define('student',{
    id:{
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    }
});

module.exports = Student;