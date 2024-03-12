import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Inventory from "../Pages/Inventory";
import Main from "../Layouts/Main";
import Reports from "../Pages/Reports";
import Suppliers from "../Pages/Suppliers";
import Orders from "../Pages/Oders";
import ManageStore from "../Pages/ManageStore";
import Settings from "../Pages/Settings";
import Logout from "../Pages/Logout";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Dashboard />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="reports" element={<Reports />} />
          <Route path="suppliers" element={<Suppliers />} />
          <Route path="orders" element={<Orders />} />
          <Route path="manage-store" element={<ManageStore />} />
          <Route path="settings" element={<Settings />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
