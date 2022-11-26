import PropTypes from "prop-types";
import React from "react";
import PlanetStat from "@components/PlanetCard/PlanetStat";

// eslint-disable-next-line react/prop-types
function PlanetsTextDetails({ planete, population }) {
  return (
    <div className="schrollPlanet">
      <div className="planetDescription">
        <h1 className="hello">{planete.planetName}</h1>
        {planete.stat.map((stat) => (
          <PlanetStat
            category={stat.category}
            level={stat.level}
            population={population}
          />
        ))}
        <p className="text">{planete.txt}</p>
        <img
          src={planete.photo01}
          alt={planete.planetName}
          className="PlanetsDetailsPicture"
        />
        <img
          src={planete.photo02}
          alt={planete.planetName}
          className="PlanetsDetailsPicture"
        />
      </div>
    </div>
  );
}
PlanetsTextDetails.propTypes = {
  planete: PropTypes.string.isRequired,
};
export default PlanetsTextDetails;
