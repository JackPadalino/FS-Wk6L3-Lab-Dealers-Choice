const Sequelize = require("sequelize");
const db = require("./db");

const Assignment = db.define('assignment',{
    id:{
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    points:{
        type:Sequelize.INTEGER,
    }
});

module.exports = Assignment;