import Blog from "../../database/Schema /Blog.schema.js"




export const getBlogs= async () =>{
    const blogs = await Blog.find()
    return blogs
}





