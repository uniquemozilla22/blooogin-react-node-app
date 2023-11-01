
import  {Router } from 'express'
import { getBlogs } from '../../controller/Blog/Blog.controller.js'


const BlogRouter = Router()

BlogRouter.get("/",(req,res)=>{
    const data = getBlogs()
    res.send(data) 
})


export default BlogRouter