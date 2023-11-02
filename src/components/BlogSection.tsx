import Card from "./Card";

const BlogSection = (props) => {
  const deleteData = async (id) => {
    console.log(id);
    const response = await fetch("http://localhost:8080/blog?id=" + id, {
      method: "DELETE",
    });
    const data = await response.json();

    console.log(data);
  };
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {props.data.map((blogs, index) => (
        <Card key={index} data={blogs} deleteData={deleteData} />
      ))}
    </div>
  );
};

export default BlogSection;
