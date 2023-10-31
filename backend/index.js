import express from 'express'
import connect_database from './database/connection.js'


const app = express()
connect_database()


app.listen(8080,()=>{
    console.log("Backend Server is now started. 8080")
})