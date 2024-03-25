import { useState } from "react";
import "./navbar.scss";
import { FaRegUser } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaExpand } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { PiWarningCircle } from "react-icons/pi";
import { MdArrowOutward } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [showLog, setShowLog] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const handleLogout = () => {
    setUser(false);
    navigate("/login");
  };

  const hadleNavHome = () => {
    setShowNav(!showNav);
  };

  const user = useAuth();

  function toggleFullscreen(elem) {
    elem = elem || document.documentElement;
    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }

  return (
    <div className="navbar">
      <div className="navbarBox">
        <div className="otherIcons">
          <FaExpand
            onClick={() => toggleFullscreen(this)}
            className="expandIcon"
          />
          <div className="navMainWeb" onClick={hadleNavHome}>
            <PiWarningCircle className="navIcon" />
            <AnimatePresence>
              {showNav && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  exit={{ y: -10, opacity: 0 }}
                  onClick={hadleNavHome}
                  className="navHomeBtn"
                >
                  <small>Qısa yol</small>
                  <div className="intoNavIcon">
                    <MdArrowOutward className="icon"/>
                    <a target="_blank"  rel="noreferrer" href="https://saralizinq.az/">Sayta keçid</a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div onClick={() => setShowLog(!showLog)} className="logOutAdmin">
          <span>Admin</span>
          <FaRegUser className="icon" />
          <AnimatePresence>
            {showLog && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                exit={{ y: -10, opacity: 0 }}
                onClick={handleLogout}
                className="logOutBtn"
              >
                Çıxış
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
