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
});

// POST /assignments/create - creates a new assignment
router.post('/',async(req,res,next)=>{
    try{
        const assignment = await Assignment.create({
            name:req.body.name,
            points:req.body.points
        });
        res.status(201).send(`New assignment "${assignment.name}" created!`);
    }catch(error){
        next(error)
    };
});

// PUT /assignments/assignmentId - change the name of an assignment
router.put('/:id',async(req,res,next)=>{
    try{
        const assignment = await Assignment.findByPk(req.params.id);
        await assignment.update({
            name:req.body.name
        });
        await assignment.save();
        res.status(201).send('Assignment name changed successfully!');
    }catch(error){
        next(error)
    };
});

// DELETE /assignments/:id - delete an assignment
router.delete('/:id',async(req,res,next)=>{
    try{
        const assignment = await Assignment.findByPk(req.params.id);
        if(!assignment){
            res.status(404).send('Assignment not found!');
        }else{
            await assignment.destroy();
            res.status(201).send('Assignment deleted.');
        }
    }catch(error){
        next(error)
    };
});

module.exports = router;