const dotenv = require('dotenv')
dotenv.config()


module.exports={
    Port:process.env.PORT,
    dbUrl:process.env.mongoURL
}