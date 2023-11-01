import mongoose from "mongoose"
import {DBConnectionString} from '../config.js'

const connect_database = async  () =>{
    try{
        await mongoose.connect(DBConnectionString)
        console.log("DB connection Successfull")
    }
    catch(error){
        console.log("There is an error connecting to the database")
    }
}

export default connect_database