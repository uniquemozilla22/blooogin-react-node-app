import Card from "./Card";

const BlogSection = (props) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {props.data.map((blogs, index) => (
        <Card key={index} data={blogs} />
      ))}
    </div>
  );
};

export default BlogSection;
