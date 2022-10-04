const db = require('./db');
const Assignment = require('./assignment');
const Classroom = require('./classroom');
const Student = require('./student');

Student.belongsToMany(Assignment,{through:'studentassignment'});
Assignment.belongsToMany(Student,{through:'studentassignment'});

Student.belongsToMany(Classroom,{through:'studentclassroom'});
Classroom.belongsToMany(Student,{through:'studentclassroom'});

module.exports = {
    db,
    Assignment,
    Classroom,
    Student
};