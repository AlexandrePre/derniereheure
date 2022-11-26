/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line no-unused-vars
function PriceLevel({ price, priceLevel, population, planete }) {
  return (
    // <p className={price === "soldout" ? "priceSoldOutDetail" : "priceDetail"}>
    //   {price === "soldout" ? "Sold Out" : `${price + priceLevel}$`}
    // </p>
    <p
      className={
        planete && planete.stat[0].level - population <= 0
          ? "priceSoldOutDetail"
          : "priceDetail"
      }
    >
      {planete && planete.stat[0].level - population <= 0
        ? "Sold Out"
        : `${planete.price + priceLevel}$`}
    </p>
  );
}

PriceLevel.propTypes = {
  priceLevel: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
export default PriceLevel;
