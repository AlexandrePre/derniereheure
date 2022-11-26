import React, { useState } from "react";
import "./empreinte.css";
import VideoFinal from "./VideoFinal";

function Empreinte() {
  const [showVideo, setShowVideo] = useState(true);

  const handleClickPrint = () => {
    setShowVideo(false);
  };

  return (
    <div>
      <div className="VideoF">
        <VideoFinal showVideo={showVideo} />
      </div>
      <button
        className="container__empreinte"
        onClick={handleClickPrint}
        type="button"
        style={{ display: showVideo ? "block" : "none" }}
      >
        <div className="scan">
          <div className="fingerprint" />
          <h3>Scanning...</h3>
        </div>
      </button>
    </div>
  );
}

export default Empreinte;
