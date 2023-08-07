import default_img from "../../../Assets/Image/Default/DefaultImg.jpg";
import "./InfluUpdateSideBar.css";
import { Tooltip } from "antd";
import { ReactComponent as Facebook } from "../../../Assets/Icon/Facebook.svg";
import { ReactComponent as Instagram } from "../../../Assets/Icon/Instagram.svg";
import { ReactComponent as Youtube } from "../../../Assets/Icon/Youtube.svg";
import { ReactComponent as Tiktok } from "../../../Assets/Icon/Tiktok.svg";
import { ReactComponent as Location } from "../../../Assets/Icon/Location.svg";
import { ReactComponent as Diamond } from "../../../Assets/Icon/Diamond.svg";
import React from "react";
import roundNumber from "../roundNumber";
import { HeartOutlined, MailFilled, PhoneFilled } from "@ant-design/icons";

const InfluSideBar = ({ influInfo }) => {
  console.log(influInfo);
  const [badgeColor, setBadgeColor] = React.useState("");
  React.useEffect(() => {
    switch (influInfo.influencerTypeName[0]) {
      case "Professional":
        setBadgeColor("#C837AB");
        break;
      case "Talent":
        setBadgeColor("#FFDD55");
        break;
      case "Celebrity":
        setBadgeColor("#218DE8");
        break;
      case "Community":
        setBadgeColor("#FF004F");
        break;
      case "Citizen":
        setBadgeColor("#96F0AF");
        break;
      default:
        return;
    }
  }, [influInfo.influencerTypeName]);

  return (
    <>
      <div className="influ-update-side-bar-container">
        <div className="side-bar-header-body">
          <div className="influ-side-bar-header">
            <img className="profile-avatar" src={default_img} alt="" />
            <p className="profile-name">{influInfo.influencerfullName}</p>
            <div className="badge-block">
              {influInfo.influencerTypeName &&
                influInfo.influencerTypeName[0] !== null && (
                  <div
                    style={{
                      border: `2px solid ${badgeColor}`,
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
                    {influInfo.influencerTypeName[0]}
                  </div>
                )}
            </div>
            <div className="profile-socials-wrapper">
              <div className="profile-socials">
                <div className="profile-social">
                  <Facebook className="profile-social-icon" />
                  <p>{roundNumber(influInfo.influencerFollowFb)}</p>
                </div>
                <div className="profile-social">
                  <Instagram className="profile-social-icon" />
                  <p>{roundNumber(influInfo.influencerFollowInsta)}</p>
                </div>
                <div className="profile-social">
                  <Youtube className="profile-social-icon" />
                  <p>{roundNumber(influInfo.influencerFollowYoutube)}</p>
                </div>
                <div className="profile-social">
                  <Tiktok className="profile-social-icon" />
                  <p>{roundNumber(influInfo.influencerFollowTikTok)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="influ-side-bar-body">
            <p className="profile-description">Description & Content type</p>
            <div className="profile-contents">
              <div className="profile-content">
                <div className="profile-topics">
                  {Array.isArray(influInfo.influencerContentTopicName)
                    ? influInfo.influencerContentTopicName
                        .filter((topic) => topic !== null)
                        .map((topic, index) => (
                          <div key={index} className="profile-topic">
                            <Tooltip placement="top" title={topic}>
                              <div>
                                {topic?.length > 8
                                  ? `${topic.slice(0, 8)}...`
                                  : topic}
                              </div>
                            </Tooltip>
                          </div>
                        ))
                    : influInfo.influencerContentTopicName !== null && (
                        <div className="profile-topic">
                          <Tooltip
                            placement="top"
                            title={influInfo.influencerContentTopicName}
                          >
                            <div>
                              {influInfo.influencerContentTopicName?.length > 8
                                ? `${influInfo.influencerContentTopicName.slice(
                                    0,
                                    8
                                  )}...`
                                : influInfo.influencerContentTopicName}
                            </div>
                          </Tooltip>
                        </div>
                      )}
                </div>
                <div className="profile-location">
                  <Location style={{ marginRight: "8px" }} />
                  <p>{influInfo.influencerAddress}</p>
                </div>
                <div className="profile-gender">
                  <p style={{ marginRight: "5px" }}>Gender:</p>
                  <p>{influInfo.influencerGender}</p>
                </div>
                <div className="profile-age">
                  <p style={{ marginRight: "5px" }}>Age:</p>
                  <p>{influInfo.influencerAge}</p>
                </div>
                <div className="profile-marriage-status">
                  <HeartOutlined style={{ marginRight: "8px" }} />

                  <p>{influInfo.influencerRelationship}</p>
                </div>
              </div>
              <div className="profile-biography">
                <p className="profile-biography-title">Biography</p>
                <p className="profile-biography-content">
                  {influInfo.influencerBio}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="influ-side-bar-footer">
          <div className="footer-content">
            <p className="profile-contact">Contact information</p>
            <div className="contact-info ">
              <div className={"contact-email"}>
                <MailFilled style={{ marginRight: "8px" }} />
                <p className="contact-text">{influInfo.influencerEmail}</p>
              </div>
              <div className={"contact-phone"}>
                <PhoneFilled style={{ marginRight: "8px" }} />
                <p className="contact-text">{influInfo.influencerPhone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfluSideBar;
