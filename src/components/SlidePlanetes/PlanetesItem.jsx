import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { motion } from "framer-motion";

function PlanetesItem({ planete, setSelectedPlanet, setShowPlanet }) {
  const [show, setShow] = useState(false);

  const handleMouseEnter = () => {
    setShow(!show);
  };
  const handleMouseLeave = () => {
    setShow(!show);
  };

  const handleClick = () => {
    setShowPlanet(true);
  };

  return (
    <div className="container__planet">
      <motion.img
        whileHover={{ scale: 1.3, rotate: 5, y: -50 }}
        className="btn-planete"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          setSelectedPlanet(planete);
          handleClick();
        }}
        id={planete.id}
        src={planete.img}
        alt={planete.planetName}
        role="presentation"
      />
      {show ? <div className="titleover">{planete.planetName}</div> : null}
    </div>
  );
}

PlanetesItem.propTypes = {
  planete: PropTypes.func.isRequired,
  setSelectedPlanet: PropTypes.func.isRequired,
  setShowPlanet: PropTypes.func.isRequired,
};

export default PlanetesItem;
