import { Outlet } from "react-router-dom";
import SidebarBooks from "./SidebarBooks";

const DashboardLayout = () => {
  return (
    <div className="flex gap-4 flex-col md:flex-row">
      <SidebarBooks /> <Outlet />
    </div>
  );
};

export default DashboardLayout;
