import BottomNavigation from "../components/Navigation";
import TopNavigation from "../components/TopNavigation";

const LayoutHOC = ({ children }) => {
  return (
    <>
      <TopNavigation />
      {children}
      <BottomNavigation />
    </>
  );
};

export default LayoutHOC;
