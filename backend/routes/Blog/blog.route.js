
import  {Router } from 'express'
import { deleteBlog, getBlogs, postBlog } from '../../controller/Blog/Blog.controller.js'


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


BlogRouter.post("/", async (req, res)=>{

    const {title , description , image } = req.body

    if(!title || !description){
        res.status(500).send({message:" Title and Description is required to make a post "})
        return;
    }
    const blog = await postBlog({title, description, image , date:new Date().toLocaleString(), time: new Date().getTime()})

    if(!blog){
        res.status(500).send({message:"There is an internal error in posting the blog"})
        return;
    }

    res.status(200).send({message:"Data has been posted.", data: blog})
})


export default BlogRouter