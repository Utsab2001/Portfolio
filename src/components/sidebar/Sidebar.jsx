import React, { useState } from 'react'
import "./sidebar.css";
import { motion, spring } from "framer-motion";
import ToggleButton from "./togglebutton/Togglebutton";
import Links from "./links/Links";

function Sidebar() {
  const[open,setOpen]=useState(false)
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 250px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 40,
      },
    },
  };
  return (
    <motion.div className="sidebar" animate={open?"open":"closed"}>
        <motion.div className="bg" variants={variants}>
            <Links/>
        </motion.div>
            <ToggleButton setOpen={setOpen}/>
    </motion.div>
  );
}

export default Sidebar