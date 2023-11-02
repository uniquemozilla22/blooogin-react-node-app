import Blog from "./Blog/index.js"


const routes = (app) =>{

    app.use("/blog",Blog.blogRoute)
}


export default routes