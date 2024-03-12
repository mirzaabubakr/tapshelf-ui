import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Header from "../Header";
import "./index.css";
import { GoSidebarExpand } from "react-icons/go";
import { useDispatch, useSelector } from "../../Store/hooks";
import { updateSideBarView } from "../../Store/theme/themeSlice";
import { AppState } from "../../Store/store";

function Main() {
  const sideBarView = useSelector((state: AppState) => state.theme.sideBarView);
  const dispatch = useDispatch();

  const setSideBarView = (value: boolean) => {
    dispatch(updateSideBarView(value));
  };

  return (
    <div className="container">
      <div
        className={`sidebar ${
          sideBarView ? "sidebar-visible" : "sidebar-hide"
        }`}
      >
        <div onClick={() => setSideBarView(false)} className="close-button">
          <GoSidebarExpand size={30} />
        </div>
        <Sidebar />
      </div>
      <div className="main">
        <div className="header">
          <Header setSideBarView={setSideBarView} />
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Main;
