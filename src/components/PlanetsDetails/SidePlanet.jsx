import PropTypes from "prop-types";
import React from "react";

function SidePlanet({ img, planetName }) {
  return (
    <img
      src={img}
      alt={planetName}
      id={`planet_${planetName}`}
      className="sidePlanet"
    />
  );
}
SidePlanet.propTypes = {
  img: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};

export default SidePlanet;
