import React, { useState } from "react";
import { PropTypes } from "prop-types";
import BgvideoHome from "./components/Bgvideo/BgvideoHome";
import SlidePlanetes from "./components/SlidePlanetes/SlidePlanetes";
import logo from "./assets/img/logo/logo_global.png";
import "./Home.css";
import PlanetCard from "./components/PlanetCard/PlanetCard";
import Nav from "./components/Nav/Nav";

function Home({ priceLevel, setPriceLevel, population }) {
  const [selectedPlanet, setSelectedPlanet] = useState("");
  const [showPlanet, setShowPlanet] = useState(false);

  return (
    <div>
      <img src={logo} className="logo" alt="logo" />
      <SlidePlanetes
        setSelectedPlanet={setSelectedPlanet}
        setShowPlanet={setShowPlanet}
        showPlanet={showPlanet}
      />
      <BgvideoHome />
      <PlanetCard
        selectedPlanet={selectedPlanet}
        showPlanet={showPlanet}
        setShowPlanet={setShowPlanet}
        priceLevel={priceLevel}
        setPriceLevel={setPriceLevel}
        population={population}
      />
      <Nav priceLevel={priceLevel} population={population} />
    </div>
  );
}

Home.propTypes = {
  setPriceLevel: PropTypes.func.isRequired,
  priceLevel: PropTypes.bool.isRequired,
  population: PropTypes.bool.isRequired,
};
export default Home;
