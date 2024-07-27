const express = require('express')
const cors = require('cors')
const serverConfig = require('./config/server-config')
const {ConnectDB} = require('./config/db')

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

ConnectDB()

app.listen(serverConfig.Port,()=>{
    console.log('The Server has Started')  
})