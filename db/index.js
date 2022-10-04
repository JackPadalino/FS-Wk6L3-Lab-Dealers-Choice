const db = require('./db');
const Assignment = require('./assignment');
const Classroom = require('./classroom');
const Student = require('./student');
const StudentAssignment = require('./studentassignment');
const StudentClassroom = require('./studentclassroom');

Student.belongsToMany(Assignment,{through:StudentAssignment});
Assignment.belongsToMany(Student,{through:StudentAssignment});

Student.belongsToMany(Classroom,{through:StudentClassroom});
Classroom.belongsToMany(Student,{through:StudentClassroom});

module.exports = {
    db,
    Assignment,
    Classroom,
    Student,
    StudentAssignment,
    StudentClassroom
};