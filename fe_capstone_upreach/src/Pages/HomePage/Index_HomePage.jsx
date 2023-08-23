import React, { useState, useEffect } from "react";
import "../../CSS/Theme.css";
import { SUB_TITLE } from "../IntroducePage/Constant";
import "./HomePage.css";
import FilterSearch from "./FilterSearch/FilterSearch";
import ProfileCardLayout from "./ProfileCardLayout/ProfileCardLayout";
import { Link } from "react-router-dom";
import ApiGetInfoAndFilterInfluencer from "../../Api/ApiGetInfoAndFilterInfluencer";
import { FireFilled } from "@ant-design/icons";
import { Spin, Space } from "antd";
import { ReactComponent as Diamond } from "../../Assets/Icon/Diamond.svg";

const Index_HomePage = ({ setLoadingFullPage }) => {
  const [allInfluencer, setAllInfluencer] = useState();
  const [loading, setLoading] = useState(true);
  const [pointReport, setpointReport] = useState();
  const [pointSearch, setPointSearch] = useState();
  const [isShowPopupUpgrade, setIsShowPopupUpgrade] = useState(false);
  const [roleClient, setRoleClient] = useState("Free");
  const [badgeColor, setBadgeColor] = useState("");

  // BE get Influencer
  const fetchDataGetList = async () => {
    try {
      const User = await JSON.parse(localStorage.getItem("user-draw-storage"))
        .state.user;
      const response = await ApiGetInfoAndFilterInfluencer.getAllInfluencer(
        User.email,
        User.roleId
      );
      console.log("res", response);
      for (var i = response.data.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = response.data[i];
        response.data[i] = response.data[j];
        response.data[j] = temp;
      }
      setAllInfluencer(response);
      setpointReport(response.Client.pointReport);
      setPointSearch(response.Client.pointSearch);
      console.log("++++++++++");
      console.log(response);

      setLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  const fetchGetRoleClient = async () => {
    try {
      const EmailUser = await JSON.parse(
        localStorage.getItem("user-draw-storage")
      ).state.user.email;
      console.log(EmailUser);
      const response = await ApiGetInfoAndFilterInfluencer.getDataClient(
        EmailUser
      );
      setRoleClient(response.Client.plan);
      console.log(response);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  // ======================================================
  useEffect(() => {
    fetchGetRoleClient();
    setAllInfluencer({});
    fetchDataGetList();
  }, []);

  useEffect(() => {
    // console.log(allInfluencer);
  }, [allInfluencer]);

  useEffect(() => {
    switch (roleClient) {
      case "Starter":
        setBadgeColor("#96F0AF");
        break;
      case "Bussiness":
        setBadgeColor("#C837AB");
        break;
      case "Gold":
        setBadgeColor("#FFDD55");
        break;
      default:
        return;
    }
  }, [roleClient]);

  return (
    <div className="contentHomePage backgroundMainPage">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8 text-center mt-3">
          <p className="homePageTextTitle d-inline">Find and Hire</p>
          <p className="homePageTextTitleHighlight d-inline"> Influencers </p>
          <p className="homePageTextTitle d-inline">in Seconds.</p>
        </div>
        <div className="col-2"></div>
        <div className="col-2"></div>
        <div className="col-8 contentSubTitle text-dark my-4 text-center">
          {SUB_TITLE}
        </div>
        <div className="col-2"></div>
        <FilterSearch
          setAllInfluencer={setAllInfluencer}
          setLoading={setLoading}
          loading={loading}
          pointSearch={pointSearch}
          setPointSearch={setPointSearch}
          isShowPopupUpgrade={isShowPopupUpgrade}
          setIsShowPopupUpgrade={setIsShowPopupUpgrade}
        />
      </div>
      <Spin size="medium" spinning={loading}>
        <div className="row text-center">
          {roleClient === "Free" ? (
            <div className="d-inline mt-4 Upgrade pt-2">
              Enjoy full search results with one of our paid plans
              <Link to="/upgrade">
                <button className="bg-dark ms-4 btnUpgrade">
                  <FireFilled
                    style={{
                      color: "orange",
                      fontSize: "32px",
                    }}
                  />{" "}
                  Upgrade now
                </button>
              </Link>
            </div>
          ) : (
            <div className="d-inline mt-4 Upgrade pt-2">
              <div className="badge-block">
                <div className="title-fit-content">
                  Enjoy full search results and report views!
                </div>
                <div
                  style={{
                    border: `2px solid ${badgeColor}`,
                    color: `${badgeColor}`,
                    backgroundColor: "white",
                  }}
                  className="badge-text"
                >
                  <Diamond
                    style={{
                      height: "15px",
                      fill: `${badgeColor}`,
                      marginRight: "8px",
                    }}
                  />
                  <p>{roleClient}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Spin>
      <div className="result-content">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6 px-2">
            <div className="row text-center">
              <div className="d-inline mt-3 countTime pt-2">
                Remaining results:{" "}
                {loading ? (
                  <Spin size="small" spinning={loading}></Spin>
                ) : (
                  <div className="d-inline numberCount">{pointSearch}</div>
                )}
                <div className="d-inline mt-3 ms-3 pt-2">
                  Remaining reports:{" "}
                  {loading ? (
                    <Spin size="small" spinning={loading}></Spin>
                  ) : (
                    <div className="d-inline numberCount">{pointReport}</div>
                  )}
                  <Link to="/upgrade">
                    <button className="ms-3 btnAdd">Add More</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3"></div>
          </div>
        </div>
        <ProfileCardLayout
          allInfluencer={allInfluencer}
          loading={loading}
          setpointReport={setpointReport}
          pointReport={pointReport}
          isShowPopupUpgrade={isShowPopupUpgrade}
          setIsShowPopupUpgrade={setIsShowPopupUpgrade}
          setLoadingFullPage={setLoadingFullPage}
        />
      </div>
    </div>
  );
};

export default Index_HomePage;
