import React from "react";
import { Routes, Route } from "react-router-dom";
import { PropTypes } from "prop-types";
import Error from "./Error";
import Home from "./Home";
import PlanetsDetails from "./components/PlanetsDetails/PlanetsDetails";
import Empreinte from "./components/empreinte/Empreinte";

function Transition({ priceLevel, setPriceLevel, population }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            priceLevel={priceLevel}
            setPriceLevel={setPriceLevel}
            population={population}
          />
        }
      />
      <Route
        path="/planets/:id"
        element={
          <PlanetsDetails priceLevel={priceLevel} population={population} />
        }
      />
      <Route path="*" element={<Error />} />
      <Route path="/empreinte" element={<Empreinte />} />
    </Routes>
  );
}

Transition.propTypes = {
  setPriceLevel: PropTypes.func.isRequired,
  priceLevel: PropTypes.bool.isRequired,
  population: PropTypes.bool.isRequired,
};

export default Transition;
