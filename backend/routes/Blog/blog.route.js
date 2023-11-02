
import  {Router } from 'express'
import { getBlogs } from '../../controller/Blog/Blog.controller.js'


const BlogRouter = Router()

BlogRouter.get("/", async (req,res)=>{
    const data =await getBlogs()
    res.send(data) 
})


export default BlogRouter