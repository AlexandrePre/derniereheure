import PropTypes from "prop-types";
import React from "react";

function Autochtone({ perso, planetName }) {
  return (
    <img
      src={perso}
      alt={planetName}
      id={`perso_${planetName}`}
      className="autochtone"
    />
  );
}
Autochtone.propTypes = {
  planetName: PropTypes.string.isRequired,
  perso: PropTypes.string.isRequired,
};

export default Autochtone;
