const express = require('express')
const cors = require('cors')
const serverConfig = require('./src/config/server-config')
const {ConnectDB} = require('./src/config/db')
const apiRoutes = require('./src/routes/index')


const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

ConnectDB()

app.use('/api',apiRoutes)

app.listen(serverConfig.Port,()=>{
    console.log('The Server has Started')  
})