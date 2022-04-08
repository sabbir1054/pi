import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  FaBars,
  FaHome,
  FaUserPlus,
  FaUsers,
  FaUmbrella,
} from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";
import { FiCoffee } from "react-icons/fi";
import { MdFastfood, MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Sidebar.css";
import SidebarMenu from "./SidebarMenu";



const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/attendance",
    name: "Attendance",
    icon: <FcCalendar />,
  },
  {
    path: "/students",
    name: "All Students",
    icon: <FaUsers />,
  },

  {
    path: "/newStudent",
    name: "Add Student",
    icon: <FaUserPlus />,
  },

  {
    path: "/food",
    name: "Food",
    icon: <MdFastfood />,
  },
  {
    path: "/coffee",
    name: "Coffee",
    icon: <FiCoffee />,
  },
  {
    path: "/umbrella",
    name: "Umbrella",
    icon: <FaUmbrella />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
const { user, logOut } = useAuth();
const handleLogOut = () => {
  logOut();
};

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "60px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section d-flex justify-content-between align-items-center ms-3 pt-3">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  <h5 className="mt-3">Admin Panel</h5>
                </motion.h1>
              )}
            </AnimatePresence>
            <div className="bars">
              <FaBars onClick={toggle} size={20} />
            </div>
          </div>
          <hr />
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
          <div className="bottom_section ">
            <section className="routes">
              <NavLink
                to="/home"
                className="link"
                activeClassName="active"
                onClick={handleLogOut}
              >
                <div className="icon">
                  <MdLogout />
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text"
                    >
                      Log Out
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            </section>
          </div>
        </motion.div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
