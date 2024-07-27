const mongoose = require('mongoose');
//Set up default mongoose connection
const {dbUrl} = require('./server-config')
async function ConnectDB(){
    return await mongoose.connect(dbUrl).then(()=>{
        console.log('Connected to DB')
    })
}

module.exports = {
    ConnectDB
}