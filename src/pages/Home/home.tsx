import { useDispatch, useSelector } from "react-redux";
import BlogSection from "../../components/BlogSection";
import Hero from "../../components/Hero";
import { blogAPI } from "../../store/slice/Blog";
import { useEffect } from "react";

const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.blog.data);

  useEffect(() => {
    dispatch(blogAPI());
  }, []);

  return (
    <>
      <Hero />
      <BlogSection data={data} />
    </>
  );
};

export default HomePage;
