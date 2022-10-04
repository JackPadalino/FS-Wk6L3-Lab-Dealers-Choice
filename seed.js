const {
    db,Assignment
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



const seedDB = async()=>{
    await db.sync({force:true,logging:false});
    try{
       const assignments = await createAssignments();
    }catch(error){
        console.log(error);
    }
};

seedDB();