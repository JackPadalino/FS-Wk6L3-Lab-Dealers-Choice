const db = require('./db');
const Assignment = require('./assignment');
const Classroom = require('./classroom');
const Student = require('./student');

Assignment.belongsToMany(Student,{through:'student|assignment'});
Student.belongsToMany(Assignment,{through:'student|assignment'});

Student.belongsToMany(Classroom,{through:'student|classroom'});
Classroom.belongsToMany(Student,{through:'student|classroom'});

module.exports = {
    db,
    Assignment,
    Classroom,
    Student
};