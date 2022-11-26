/* eslint-disable react/prop-types */
import React from "react";
import { PropTypes } from "prop-types";

function NavBar({ navigation, priceLevel, population }) {
  return (
    <div className="container__navbar">
      <img className="img__navbar" src={navigation.img} alt="" />
      <div className="container__title">
        <h2 className="first__title__navbar">{navigation.planetName}</h2>
        <h4
          className={
            navigation && navigation.stat[0].level - population <= 0
              ? "navSoldout"
              : "navaffiche"
          }
        >
          {navigation && navigation.stat[0].level - population <= 0
            ? "Sold Out"
            : `${navigation.price + priceLevel}$`}
        </h4>
      </div>
    </div>
  );
}

NavBar.propTypes = {
  navigation: PropTypes.func.isRequired,
};

export default NavBar;
