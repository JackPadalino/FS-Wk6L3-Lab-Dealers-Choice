// create a post, put, and delete route
const express = require('express');
const router = express.Router();

const {
    Assignment,Student,Classroom,StudentAssignment,StudentClassroom
} = require('../db');

// GET /assignments - returns all assignments including the students who have completed it
router.get('/',async(req,res,next)=>{
    try{
        const assignments = await Assignment.findAll({
            include:[
                {
                    model:Student,
                    as:'students'
                }
            ]
        });
        res.send(assignments)
    }catch(error){
        next(error)
    };
});

// GET /assignments/assignmentId - returns details of a single assignment and which students completed it
router.get('/:id',async(req,res,next)=>{
    try{
        const assignment = await Assignment.findByPk(req.params.id,{
            include:[
                {
                    model:Student,
                    as:'students'
                }
            ]
        });
        //const students = await assignment.getStudents();
        res.send(assignment);
    }catch(error){
        next(error)
    };
})

module.exports = router;