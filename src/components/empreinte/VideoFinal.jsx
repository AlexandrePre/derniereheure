import React from "react";
import PropTypes from "prop-types";
import Departvideo from "../../assets/video/DEPARTGENERIC.mp4";
import "./VideoFinal.css";

function VideoFinal({ showVideo }) {
  return (
    <div className="Bgvideo" style={{ display: showVideo ? "none" : "block" }}>
      <video autoPlay muted id="bgVideo">
        <source src={Departvideo} type="video/mp4" />
      </video>
    </div>
  );
}

VideoFinal.propTypes = {
  showVideo: PropTypes.string.isRequired,
};

export default VideoFinal;
