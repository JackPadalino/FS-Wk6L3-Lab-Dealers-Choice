const Sequelize = require("sequelize");
const db = require("./db");

const StudentAssignment = db.define('studentassignment',{
    /* id:{
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        primaryKey:true
    } */
});

module.exports = StudentAssignment;