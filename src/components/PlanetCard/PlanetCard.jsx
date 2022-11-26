import React from "react";
import { motion } from "framer-motion";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import PlanetStat from "./PlanetStat";
import "./PlanetCard.css";
import bouton from "../../assets/img/cartes/BoutonAllonsy.png";
import PicClosePlanetsButton from "../../assets/img/cartes/bouttonClose.png";

function PlanetCard({
  selectedPlanet,
  showPlanet,
  priceLevel,
  setShowPlanet,
  population,
}) {
  const handleClick = () => {
    setShowPlanet(false);
  };

  const variants = {
    open: {
      x: 0,
      rotate: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        repeat: 0,
        delay: 0,
        type: "spring",
        stiffness: 200,
        damping: 25,
      },
    },
    close: {
      x: 800,
      rotate: 20,
      scale: 0,
      opacity: 0,
    },
  };
  return (
    <motion.div
      whileHover={{ scale: 1.0, rotate: 0, y: 0 }}
      variants={variants}
      animate={showPlanet ? "open" : "close"}
      className="planet__detail__stats__container"
      style={{ display: showPlanet ? "block" : "none" }}
    >
      <div className="buttonClose">
        <img
          src={PicClosePlanetsButton}
          alt="buttonClose"
          className="PlanetButtonClose"
          onClick={() => handleClick()}
          role="presentation"
        />
      </div>
      <p className="title">{selectedPlanet.planetName}</p>
      <div className="planet__details">
        <p>{selectedPlanet.darkFriday}</p>
        <img src={selectedPlanet.photo01} alt={selectedPlanet.planetName} />
        {selectedPlanet &&
          selectedPlanet.stat.map((stat) => (
            <PlanetStat
              name={stat.category}
              category={stat.category}
              level={stat.level}
              population={population}
            />
          ))}
        <p
          className={
            selectedPlanet && selectedPlanet.stat[0].level - population <= 0
              ? "priceSoldOut"
              : "price"
          }
        >
          {selectedPlanet && selectedPlanet.stat[0].level - population <= 0
            ? "Sold Out"
            : `${selectedPlanet.price + priceLevel}$`}
        </p>
      </div>
      <Link to={`/planets/${selectedPlanet.id - 1}`}>
        <div className="go">
          <motion.img
            whileHover={{ scale: 1.2, rotate: -4, y: 0 }}
            src={bouton}
            alt="Allons-Y"
          />
        </div>
      </Link>
    </motion.div>
  );
}

PlanetCard.propTypes = {
  selectedPlanet: PropTypes.func.isRequired,
  showPlanet: PropTypes.bool.isRequired,
  priceLevel: PropTypes.bool.isRequired,
  setShowPlanet: PropTypes.bool.isRequired,
  population: PropTypes.bool.isRequired,
};

export default PlanetCard;
