import React, { useState, useEffect } from "react";
import Garden from "./components/Garden";
import SendBack from "./components/SendBank";
import plants from "./constants/plants";
import { objectToArray } from "./helpers/commonFunctions";

const plantsList = objectToArray(plants);

export default function App() {
  const [planting, setPlanting] = useState([
    ...Array(45).fill({ image: null, point: null, key: null }),
  ]);

  const [choosePlant, setChoosePlant] = useState(planting[0]);

  useEffect(() => {
    // block dragging of images
    window.ondragstart = () => false;
  }, []);

  return (
    <div className="gd-container">
      <div className="gd-container-game">
        <SendBack
          plants={plantsList}
          choosePlant={choosePlant}
          setChoosePlant={setChoosePlant}
        />
        <Garden
          planting={planting}
          setPlanting={setPlanting}
          choosePlant={choosePlant}
        />
      </div>
    </div>
  );
}
