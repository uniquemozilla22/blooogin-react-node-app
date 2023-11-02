
import  {Router } from 'express'
import { deleteBlog, getBlogs } from '../../controller/Blog/Blog.controller.js'


const BlogRouter = Router()

BlogRouter.get("/", async (req,res)=>{
    const data =await getBlogs()
    res.send(data) 
})


BlogRouter.delete("/",async (req,res)=>{
    const {query} = req;
    const isDeleted =  await deleteBlog(query.id);

    if(isDeleted){
        res.send({message: "Data Deleted"})
        return;
    }
    else{
        res.send({message: "Data Not deleted"})
        return;
    }
    
})


export default BlogRouter