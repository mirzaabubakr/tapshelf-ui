import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../../Services/Constants/Sidebar";
import SidebarLink from "./SidebarLink";
import "./index.css";

function Sidebar() {
  return (
    <>
      <div className="sidebar-menu">
        <div className="menu-header">TopShelf</div>
        <div className="menu-items">
          {DASHBOARD_SIDEBAR_LINKS.map((link, index) => (
            <SidebarLink key={index} link={link} />
          ))}
        </div>
      </div>
      <div className="sidebar-footer">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link, index) => (
          <SidebarLink key={index} link={link} />
        ))}
      </div>
    </>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
