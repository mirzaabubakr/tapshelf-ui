import { BiDoorOpen } from "react-icons/bi";
import { CiHome } from "react-icons/ci";
import { HiOutlineCog } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { GoChecklist } from "react-icons/go";
import { TbReportSearch } from "react-icons/tb";
import { BsBox } from "react-icons/bs";
import { MdOutlineInventory2 } from "react-icons/md";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <CiHome />,
  },
  {
    key: "inventory",
    label: "Inventory",
    path: "/inventory",
    icon: <MdOutlineInventory2 />,
  },
  {
    key: "reports",
    label: "Reports",
    path: "/reports",
    icon: <TbReportSearch />,
  },
  {
    key: "suppliers",
    label: "Suppliers",
    path: "/suppliers",
    icon: <IoPersonOutline />,
  },
  {
    key: "order",
    label: "Orders",
    path: "/orders",
    icon: <BsBox />,
  },
  {
    key: "manage-store",
    label: "Manage Store",
    path: "/manage-store",
    icon: <GoChecklist />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <HiOutlineCog />,
  },
  {
    key: "logout",
    label: "Logout",
    path: "/logout",
    icon: <BiDoorOpen />,
  },
];
