// create a post, put, and delete route
const express = require('express');
const router = express.Router();

const {
    Assignment,Student,Classroom,StudentAssignment,StudentClassroom
} = require('../db');

// GET /classrooms - returns details of all classrooms and its students
router.get('/',async(req,res,next)=>{
    try{
        const classrooms = await Classroom.findAll({
            include:[
                {
                    model:Student,
                    as:'students'
                }
            ]
        });
        res.send(classrooms)
    }catch(error){
        next(error)
    };
});

// GET /classrooms/classroomId - returns details of a single classroom and its students
router.get('/:id',async(req,res,next)=>{
    try{
        const classroom = await Classroom.findByPk(req.params.id,{
            include:[
                {
                    model:Student,
                    as:'students'
                }
            ]
        });
        res.send(classroom)
    }catch(error){
        next(error)
    };
});

module.exports = router;