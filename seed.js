const {
    db,Assignment,Classroom,Student,StudentAssignment,StudentClassroom
} = require('./db');

const createAssignments = async()=>{
    const assignments = [
        {name:'Assignment 1',points:10},
        {name:'Assignment 2',points:5},
        {name:'Assignment 3',points:15},
        {name:'Assignment 4',points:20},
        {name:'Assignment 5',points:5},
    ];
    const assignmentPromises = assignments.map((assignment)=>Assignment.create(assignment));
    const [assignment1,assignment2,assignment3,assignment4,assignment5] = await Promise.all(assignmentPromises);
    return {
        assignment1,assignment2,assignment3,assignment4,assignment5
    };
};

const createClassrooms = async()=>{
    const classrooms = [
        {name:'AP CSP'},
        {name:'Algebra'},
        {name:'Living Environment'},
        {name:'Global History'},
        {name:'Economics & Government'},
    ];
    const classroomPromises = classrooms.map((classroom)=>Classroom.create(classroom));
    const [apcsp,algebra,livingEnv,globalHist,econGov] = await Promise.all(classroomPromises);
    return {
        apcsp,algebra,livingEnv,globalHist,econGov
    };
};

const createStudents = async()=>{
    const students = [
        {name:'Jack'},
        {name:'Jasmine'},
        {name:'Sofia'},
        {name:'Lady'},
        {name:'Ariana'},
    ];
    const studentPromises = students.map((student)=>Student.create(student));
    const [jack,jasmine,sofia,lady,ariana] = await Promise.all(studentPromises);
    return {
        jack,jasmine,sofia,lady,ariana
    };
};

const createStudentAssignments = async(students,assignments)=>{
    const studentAssignments = [
        {studentId:students.jack.id,assignmentId:assignments.assignment1.id},
        {studentId:students.jack.id,assignmentId:assignments.assignment2.id},
        {studentId:students.jasmine.id,assignmentId:assignments.assignment2.id},
        {studentId:students.jasmine.id,assignmentId:assignments.assignment3.id},
        {studentId:students.sofia.id,assignmentId:assignments.assignment3.id},
        {studentId:students.sofia.id,assignmentId:assignments.assignment1.id},
        {studentId:students.lady.id,assignmentId:assignments.assignment4.id},
        {studentId:students.ariana.id,assignmentId:assignments.assignment5.id}
    ];
    const promises = studentAssignments.map((studentAssignment)=>StudentAssignment.create(studentAssignment));
    return await Promise.all(promises);
};

const createStudentClassrooms = async(students,classrooms)=>{
    const studentClassrooms = [
        {studentId:students.jack.id,classroomId:classrooms.apcsp.id},
        {studentId:students.jack.id,classroomId:classrooms.algebra.id},
        {studentId:students.jasmine.id,classroomId:classrooms.apcsp.id},
        {studentId:students.sofia.id,classroomId:classrooms.apcsp.id},
        {studentId:students.sofia.id,classroomId:classrooms.algebra.id}
    ];
    const promises = studentClassrooms.map((studentClassroom)=>StudentClassroom.create(studentClassroom));
    return await Promise.all(promises);
};

const seedDB = async()=>{
    await db.sync({force:true,logging:false});
    try{
       const assignments = await createAssignments();
       const classrooms = await createClassrooms();
       const students = await createStudents();
       await createStudentAssignments(students,assignments);
       await createStudentClassrooms(students,classrooms);
    }catch(error){
        console.log(error);
    };
};

seedDB();