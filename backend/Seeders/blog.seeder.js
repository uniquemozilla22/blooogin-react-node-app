import Blog from "../database/Schema /Blog.schema.js"
import connect_database from '../database/connection.js';

connect_database()


const seeding_blog =(data) =>{
    console.log("data insertion started")
    try{
        data.forEach(async (blog) => {
            const database_added_blog =  new Blog({...blog});
            await database_added_blog.save();
    console.log("data insertion completed")


        });
    }
    catch(error){
        console.log(error)
    console.log("data insertion failed")

    }
    
}



const data =[{
    title:"Hello this is the blogging website",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date:new Date().toDateString(),
    time:new Date().getTime(),
    image:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
},{
    title:"China Stops the manufactuer of the company Apple",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date:new Date().toDateString(),
    time:new Date().getTime(),
    image:"https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
},
{
    title:"USA has the best of the best coders but india is not the less",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date:new Date().toDateString(),
    time:new Date().getTime(),
    image:"https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
}]


seeding_blog(data)