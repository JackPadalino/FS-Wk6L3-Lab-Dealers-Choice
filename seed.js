const db = require('./db');

const seedDB = async()=>{
    await db.sync({force:true,logging:false});
};

seedDB();