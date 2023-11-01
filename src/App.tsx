import "./App.css";
import Hero from "./components/Hero";
import BlogSection from "./components/BlogSection";
import LayoutHOC from "./HOC/LayoutHOC";
import HomePage from "./pages/Home/home";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <LayoutHOC>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </LayoutHOC>
    </>
  );
}

export default App;
