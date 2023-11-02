import "./App.css";
import LayoutHOC from "./HOC/LayoutHOC";
import HomePage from "./pages/Home/home";
import { Route, Routes } from "react-router-dom";

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
