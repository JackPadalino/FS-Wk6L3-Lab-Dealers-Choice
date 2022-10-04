const {
    db,Assignment,Classroom,Student
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
    return await Promise.all(assignmentPromises);
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
    return await Promise.all(classroomPromises);
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
    return await Promise.all(studentPromises);
};

const seedDB = async()=>{
    await db.sync({force:true,logging:false});
    try{
       await createAssignments();
       await createClassrooms();
       await createStudents();
    }catch(error){
        console.log(error);
    };
};

seedDB();