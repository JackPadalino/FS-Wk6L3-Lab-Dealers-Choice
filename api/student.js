// create a post, put, and delete route
const express = require('express');
const router = express.Router();

const {
    Assignment,Student,Classroom,StudentAssignment,StudentClassroom
} = require('../db');

// GET /students - returns all students along with their completed assignments and classes
router.get('/',async(req,res,next)=>{
    try{
        const students = await Student.findAll({
            include:[
                {
                    model:Assignment,
                    as:'assignments'
                },
                {
                    model:Classroom,
                    as:'classrooms'
                }
            ]
        });
        res.send(students)
    }catch(error){
        next(error)
    };
});

// GET /students/studentId - returns the details of a single student along with their assignments and classes
router.get('/:id',async(req,res,next)=>{
    try{
        const student = await Student.findByPk(req.params.id,{
            include:[
                {
                    model:Assignment,
                    as:'assignments'
                },
                {
                    model:Classroom,
                    as:'classrooms'
                }
            ]
        });
        res.send(student)
    }catch(error){
        next(error)
    };
});

module.exports = router;