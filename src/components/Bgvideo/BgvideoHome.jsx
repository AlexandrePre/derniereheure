import React from "react";
import Bgvideo from "../../assets/video/background.mp4";
import "./BgvideoHome.css";

function BgvideoHome() {
  return (
    <div className="Bgvideo">
      <video loop autoPlay muted id="bgVideo">
        <source src={Bgvideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default BgvideoHome;
