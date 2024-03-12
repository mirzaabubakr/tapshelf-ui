import { Link, useLocation } from "react-router-dom";
import { LinkType } from "../../../Types/Layout/Sidebar";

export default function SidebarLink({ link }: LinkType) {
  const { pathname } = useLocation();
  return (
    <Link
      to={link.path}
      className={pathname === link.path ? "item selected" : "item"}
    >
      <span>{link.icon}</span>
      <span>{link.label}</span>
    </Link>
  );
}
