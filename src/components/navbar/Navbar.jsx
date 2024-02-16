import React from "react";
import "./navbar.css";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";


function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="wrapper">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{duration:0.5}}
          >
            Utsab
          </motion.span>
          <ul className="menu">
            <li className="menuItems">Home</li>
            <li className="menuItems">About</li>
            <li className="menuItems">Services</li>
            <li className="menuItems">Portfolio</li>
            <li className="menuItems">Contact</li>
          </ul>
        </div>
        <Sidebar/>
      </div>
    </>
  );
}

export default Navbar;
