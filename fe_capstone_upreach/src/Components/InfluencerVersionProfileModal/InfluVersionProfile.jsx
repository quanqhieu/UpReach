import "./InfluVersionProfile.css";
import InfluSideBar from "./InfluSideBar/VersionInfluSideBar";
import InfluImage from "./InfluImage/VersionInfluImage";
import InfluReport from "./InfluReport/VersionInfluReport";
import React from "react";
import axios from "axios";
const InfluVersionProfile = ({ profileInflu }) => {
  return (
    <>
      <div className="influ-version-profile">
        <div className="influ-side-bar">
          <InfluSideBar influInfo={profileInflu} />
        </div>
        <div className="cover-influ-image-report">
          <div className="influ-image">
            {/* <InfluImage influInfo={profileInflu} /> */}
          </div>
          <div className="influ-report">
            <InfluReport influInfo={profileInflu} />
          </div>
        </div>
      </div>
    </>
  );
};

export default InfluVersionProfile;
