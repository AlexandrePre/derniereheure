/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Planetes from "../../tools/Planetes";
import NavBar from "./NavBar";
import "./nav.css";

function Nav({ priceLevel, population }) {
  return (
    <motion.ul
      transition={{
        duration: 0,
        type: "spring",
        stiffness: 90,
        delay: 0.5,
      }}
      initial={{ x: 0, y: -900, scale: 1, opacity: 1 }}
      animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
      className="navbar__link"
    >
      {Planetes.map((navigation) => (
        <Link to={`/planets/${navigation.id - 1}`}>
          <li className="nav" id={navigation.name} key={navigation.id}>
            <NavBar
              navigation={navigation}
              priceLevel={priceLevel}
              population={population}
            />
          </li>
        </Link>
      ))}
    </motion.ul>
  );
}

export default Nav;
