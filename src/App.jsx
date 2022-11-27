import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import Chrono from "./components/Chrono/Chrono";
import Transition from "./Transition";
import "./App.css";
import Bgmediaquery from "./BGmediaquery";

function App() {
  const [priceLevel, setPriceLevel] = useState(0);
  const [population, setPopulation] = useState(0);
  return (
    <div className="App">
      <Bgmediaquery />
      <Router>
        <Transition
          priceLevel={priceLevel}
          setPriceLevel={setPriceLevel}
          population={population}
          setPopulation={setPopulation}
        />
        <Chrono
          priceLevel={priceLevel}
          setPriceLevel={setPriceLevel}
          population={population}
          setPopulation={setPopulation}
        />
      </Router>
    </div>
  );
}

export default App;
