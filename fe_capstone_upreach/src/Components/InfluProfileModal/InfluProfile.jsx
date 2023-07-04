import "./InfluProfile.css";
import InfluSideBar from "./InfluSideBar/InfluSideBar";
import InfluImage from "./InfluImage/InfluImage";
import React from "react";
const InfluProfile = ({ profileInflu }) => {
  return (
    <>
      <div className="influ-profile">
        <div className="influ-side-bar">
          <InfluSideBar influInfo={profileInflu} />
        </div>
        <div className="influ-image">
          <InfluImage />
        </div>
      </div>
    </>
  );
};

export default InfluProfile;
