import express from 'express'
import connect_database from './database/connection.js'
import routes from './routes/index.js'
import cors from 'cors'

const app = express()
connect_database()

// middleware
app.use(cors())

// Routes

routes(app)

app.listen(8080,()=>{
    console.log("Backend Server is now started. 8080")
})