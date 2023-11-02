import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import BottomNavigation from "../components/Navigation";
import TopNavigation from "../components/TopNavigation";

const LayoutHOC = ({ children }: any) => {
  const isLoading = useSelector((state) => state.LOADING.status);
  return (
    <>
      {isLoading && <Loading />}
      <TopNavigation />
      {children}
      <BottomNavigation />
    </>
  );
};

export default LayoutHOC;
