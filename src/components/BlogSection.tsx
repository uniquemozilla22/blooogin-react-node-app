import Card from "./Card";

const BlogSection = () => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {[1, 2, 3, 4, 5].map(() => (
        <Card />
      ))}
    </div>
  );
};

export default BlogSection;
