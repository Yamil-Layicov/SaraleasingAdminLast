import "./accordion.scss";
import { GoDot } from "react-icons/go";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Accordion = ({ sidebarData }) => {
  const [isToggle, setIsToggle] = useState({});

  const handleLink = (id) => {
    setIsToggle((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };


  return (
    <div>
      {sidebarData.map((sData) => (
        <div key={sData.id} className="accordionContent">
          <div className="headerText" onClick={() => handleLink(sData.id)}>
            <div className="leftSide">
              <div className="icon">{sData.icon}</div>
              <span>{sData.title}</span>
            </div>
            <div className="icon2">
            {isToggle[sData.id] ? <FaAngleDown/> : <FaAngleRight/>}
            </div>
          </div>
          {isToggle[sData.id] &&
            sData.texts.map((item) => (
              <div key={item.id} className="secondrayText">
                <div className="secondrayTextInside">
                  <NavLink to={item.url} className="linkNav">
                    <GoDot />
                    {item.name}
                  </NavLink>
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
