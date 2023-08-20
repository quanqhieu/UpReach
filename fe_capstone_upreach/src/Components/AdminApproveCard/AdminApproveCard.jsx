import "./AdminApproveCard.css";
import default_img from "../../Assets/Image/Default/DefaultImg.jpg";
import { ReactComponent as Facebook } from "../../Assets/Icon/Facebook.svg";
import { ReactComponent as Instagram } from "../../Assets/Icon/Instagram.svg";
import { ReactComponent as Youtube } from "../../Assets/Icon/Youtube.svg";
import { ReactComponent as Tiktok } from "../../Assets/Icon/Tiktok.svg";
import { ReactComponent as Location } from "../../Assets/Icon/Location.svg";
import { Tooltip } from "antd";
import roundNumber from "../../Components/InfluUpdateProfileModal/roundNumber";

const AdminApproveCard = ({ reportApprove }) => {
  return (
    <>
      <div className="profile-layout">
        <div className="profile-content-layout">
          <div className="profile-avatar-content">
            <img className="profile-avatar" src={default_img} alt="" />
            <div className="profile-content">
              <p className="profile-name">{reportApprove?.profile?.fullName}</p>
              <div className="profile-location">
                <Location style={{ marginRight: "8px" }} />
                <p>{reportApprove?.profile?.Address}</p>
              </div>
              <div className="profile-topics">
                {reportApprove?.topics?.slice(0, 3)?.map((topic, index) => (
                  <div key={index} className="profile-topic">
                    <Tooltip placement="top" title={topic}>
                      <div>
                        {topic?.length > 8 ? `${topic?.slice(0, 8)}...` : topic}
                      </div>
                    </Tooltip>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="profile-socials">
          <div className="profile-social">
            <Facebook />
            <p>{roundNumber(reportApprove?.platform?.Follow_FB)}</p>
          </div>
          <div className="profile-social">
            <Instagram />
            <p>{roundNumber(reportApprove?.platform?.Follow_Insta)}</p>
          </div>
          <div className="profile-social">
            <Youtube />
            <p>{roundNumber(reportApprove?.platform?.Follow_TikTok)}</p>
          </div>
          <div className="profile-social">
            <Tiktok />
            <p>{roundNumber(reportApprove?.platform?.Follow_Youtube)}</p>
          </div>
        </div>
        <div className="profile-images">
          <img className="profile-image" src={default_img} alt="" />
          <img className="profile-image" src={default_img} alt="" />
          <img className="profile-image" src={default_img} alt="" />
        </div>
      </div>
    </>
  );
};
export default AdminApproveCard;
