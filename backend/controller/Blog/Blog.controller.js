import Blog from "../../database/Schema /Blog.schema.js"




export const getBlogs= async () =>{
    const blogs = await Blog.find()
    return blogs
}

export const deleteBlog = async (id) =>{
    try{
        const findBlog = await Blog.findById(id)
        console.log(findBlog)
        if(!findBlog) return false
        await Blog.deleteOne(findBlog)
        return true 
    }
    catch(error){
        console.log(error)
        return false
    }
}

export const postBlog = async(blog) =>{

    try{
        const database_blog  = new Blog({...blog})
        await database_blog.save()

        return database_blog
    }
    catch(error){
        console.log(error)
        return null
    }
}





