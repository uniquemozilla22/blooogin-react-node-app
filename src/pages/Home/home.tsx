import { useDispatch } from "react-redux";
import BlogSection from "../../components/BlogSection";
import Hero from "../../components/Hero";
import { onLoading, onNotLoading } from "../../store/slice/Loading";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [blogData, setBlogData] = useState<any>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchBlogData();
  }, []);

  const fetchBlogData = async () => {
    dispatch(onLoading());

    try {
      const response = await fetch("http://localhost:8080/blog");
      const data = await response.json();
      setBlogData([...data]);
    } catch (error) {
      console.log();
    }
    dispatch(onNotLoading());
  };

  return (
    <>
      <Hero />
      <BlogSection data={blogData} />
    </>
  );
};

export default HomePage;
