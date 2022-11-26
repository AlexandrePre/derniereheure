import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import "./Chrono.css";
import { motion } from "framer-motion";

function Chrono({ setPriceLevel, priceLevel, population, setPopulation }) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState("01");
  const [level, setLevel] = useState(-3);

  let timer;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds - 1);
      setLevel(level + 1);
      if (level % 2 === 0) {
        setPriceLevel(priceLevel + 100);
      }
      if (level % 20 === 0) {
        setPopulation(population + 5);
      }
      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
      if (minutes === 0) {
        setHours(hours - 1);
        setMinutes(59);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div className="container__chrono">
      <h1 className="title__chrono">Dernier départ</h1>
      <motion.h2
        whileHover={{ scale: 1.3, rotate: 5, y: -50 }}
        transition={{
          duration: 0,
          type: "spring",
          stiffness: 50,
          delay: 2,
        }}
        initial={{ x: 0, y: 100, scale: 1 }}
        animate={{ x: 0, y: 0, scale: 1 }}
        className="chrono"
      >
        {hours < 10 ? hours : hours}:{minutes < 10 ? minutes : minutes}:
        {seconds < 10 ? seconds : seconds}
      </motion.h2>
    </div>
  );
}

Chrono.propTypes = {
  setPriceLevel: PropTypes.func.isRequired,
  priceLevel: PropTypes.bool.isRequired,
  setPopulation: PropTypes.func.isRequired,
  population: PropTypes.bool.isRequired,
};
export default Chrono;
