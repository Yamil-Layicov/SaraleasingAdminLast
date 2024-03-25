import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import MainContent from "../../components/mainContent/MainContent";
import { Outlet } from "react-router-dom";
import "./adminLayout.scss";

const AdminLayout = () => {
  return (
    <div className="adminLayout">
      <Sidebar />
      <MainContent>
        <Navbar />
        <Outlet />
      </MainContent>
    </div>
  );
};

export default AdminLayout;
