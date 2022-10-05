const express = require('express');
const router = express.Router();

const assignmentRouter = require('./assignment');
const classroomRouter = require('./classroom');
const studentRouter = require('./student');

router.use('/assignments',assignmentRouter);
router.use('/classrooms',classroomRouter);
router.use('/students',studentRouter);

module.exports = router;