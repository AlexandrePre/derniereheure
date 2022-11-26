/* eslint-disable react/prop-types */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Empreinte from "../empreinte/Empreinte";
import PicBuyButton from "../../assets/img/pagePlanetes/BoutonAchete.png";

// eslint-disable-next-line no-unused-vars
function BuyButton({ price, planete, population }) {
  const [popup, setPopup] = useState(false);
  const popupClick = () => {
    setPopup(!popup);
  };
  return (
    <div>
      <motion.img
        whileHover={{ scale: 1.2, rotate: -4, y: 0 }}
        src={PicBuyButton}
        alt="BuyButton"
        className={
          planete && planete.stat[0].level - population <= 0
            ? "hidden"
            : "PlanetDetailBuyButton"
        }
        onClick={popupClick}
        role="presentation"
      />
      {popup ? <Empreinte /> : null}
    </div>
  );
}

BuyButton.propTypes = {
  price: PropTypes.string.isRequired,
};
export default BuyButton;
