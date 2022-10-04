const Sequelize = require("sequelize");
const db = require("./db");

const StudentClassroom = db.define('studentclassroom',{
    /* id:{
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        primaryKey:true
    } */
});

module.exports = StudentClassroom;