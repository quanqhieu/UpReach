import "./InfluProfile.css";
import InfluSideBar from "./InfluSideBar/InfluSideBar";
import InfluImage from "./InfluImage/InfluImage";
import InfluReport from "./InfluReport/InfluReport";
import React, { useEffect, useState } from "react";
import ApiGetInfoAndFilterInfluencer from "../../Api/ApiGetInfoAndFilterInfluencer";
const InfluProfile = ({ profileInflu }) => {
  const [roleClient, setRoleClient] = useState();
  const fetchGetRoleClient = async () => {
    try {
      const EmailUser = await JSON.parse(
        localStorage.getItem("user-draw-storage")
      ).state.user.email;
      // console.log(EmailUser);
      const response = await ApiGetInfoAndFilterInfluencer.getDataClient(
        EmailUser
      );
      setRoleClient(response.Client.plan);
      // console.log(response);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchGetRoleClient();
  }, []);
  return (
    <>
      <div className="influ-profile">
        <div className="influ-side-bar">
          <InfluSideBar influInfo={profileInflu} roleClient={roleClient} />
        </div>
        <div className="cover-influ-image-report">
          <div className="influ-image">
            <InfluImage influInfo={profileInflu} />
          </div>
          <div className="influ-report">
            <InfluReport influInfo={profileInflu} roleClient={roleClient} />
          </div>
        </div>
      </div>
    </>
  );
};

export default InfluProfile;
