import { PropTypes } from "prop-types";
import { motion } from "framer-motion";
import Planetes from "../../tools/Planetes";
import PlanetesItem from "./PlanetesItem";
import "./SlidePlanetes.css";

function SlidePlanetes({ setSelectedPlanet, setShowPlanet, showPlanet }) {
  return (
    <ul className="planete">
      {Planetes.map((planete) => (
        <motion.li
          transition={{
            duration: 0,
            type: "spring",
            stiffness: 90,
            delay: 1.5,
          }}
          initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
          animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
          className="planeteItem"
        >
          <PlanetesItem
            planete={planete}
            setSelectedPlanet={setSelectedPlanet}
            setShowPlanet={setShowPlanet}
            showPlanet={showPlanet}
          />
        </motion.li>
      ))}
    </ul>
  );
}
SlidePlanetes.propTypes = {
  setSelectedPlanet: PropTypes.func.isRequired,
  setShowPlanet: PropTypes.func.isRequired,
  showPlanet: PropTypes.func.isRequired,
};

export default SlidePlanetes;
