import Accordion from "../../ui/accordion/Accordion";
import "./sidebar.scss";
import { AiOutlineAppstore } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineDatabase } from "react-icons/ai";
import { MdOutlineMedicalServices } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { BiMessageDetail } from "react-icons/bi";
import { IoNewspaperOutline } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { FaRegAddressCard } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";





const sidebarData = [
  {
    id: 1,
    title: "Əsas səhifə",
    icon: <AiOutlineHome />,
    texts: [
      { id: 1, name: "Slider", url: "sliders" },
      { id: 2, name: "Rəylər", url: "comments" },
      { id: 3, name: "Şirkətlər", url: "companies" },
    ],
  },
  {
    id: 2,
    title: "Haqqımızda",
    icon: <AiOutlineDatabase />,
    texts: [
      { id: 4, name: "Haqqımızda", url: "about" },
      { id: 5, name: "Missiyamız", url: "missions" },
      { id: 6, name: "Rəhbərlik", url: "management" },
    ],
  },
  {
    id: 3,
    title: "Xidmətlər",
    icon: <MdOutlineMedicalServices />,
    texts: [
      { id: 7, name: "Kateqoriyalar", url: "categories" },
      { id: 8, name: "Məhsullar", url: "products" },
      { id: 9, name: "Xarakteristika", url: "characteristic" },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="header">
        <NavLink to="/">
          <img src="/saraLizingLogo.png" alt="" />
        </NavLink>
      </div>
      <div className="sidebarBody">
        <div className="sidebarBodyInside">
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "#C89C4E" : "" })}
            to="/"
            className="link"
          >
            <AiOutlineAppstore className="icon" />
            <span>İdarə paneli</span>
          </NavLink>
          <h5>SƏHİFƏLƏR</h5>
          <Accordion sidebarData={sidebarData} />
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "#C89C4E" : "" })}
            to="news"
            className="link"
          >
            <IoNewspaperOutline className="icon" />
            <span>Xəbərlər</span>
          </NavLink>
          {/* <NavLink
            style={({ isActive }) => ({ color: isActive ? "#C89C4E" : "" })}
            to="layihələr"
            className="link"
          >
            <GrProjects className="icon projectIcon" />
            <span>Layihələr</span>
          </NavLink> */}
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "#C89C4E" : "" })}
            to="karyera"
            className="link"
          >
            <FaRegAddressCard className="icon" />
            <span>Karyera</span>
          </NavLink>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "#C89C4E" : "" })}
            to="socials"
            className="link"
          >
            <IoShareSocialSharp className="icon karyeraIcon" />
            <span>Sosial şəbəkələr</span>
          </NavLink>
          <h5>LAYOUT</h5>
          {/* <NavLink
            style={({ isActive }) => ({ color: isActive ? "#C89C4E" : "" })}
            to="settings"
            className="link"
          >
            <IoSettingsOutline className="icon" />
            <span>Tənzimləmələr</span>
          </NavLink> */}
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "#C89C4E" : "" })}
            to="messages"
            className="link"
          >
            <BiMessageDetail className="icon" />
            <span>Müraciətlər</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
