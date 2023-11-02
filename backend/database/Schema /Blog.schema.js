import mongoose from "mongoose";

// {
//     id:1,
//     title:"Hello this is the blogging website",
//     description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//     date:new Date().toDateString(),
//     time:new Date().getTime(),
//     image:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
// }

const BlogSchema =  new mongoose.Schema({
    title:{
        required:true,
        type:String
    },
    description:{
        required:true,
        type:String
    },
    date:{
        required:true,
        type:String
    },
    time:{
        required:true,
        type:Number
    },
    image:{
        required:false,
        type:String
    }
})


const Blog = mongoose.model("blog", BlogSchema)

export default Blog