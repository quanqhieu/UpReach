import "./AdminApproveCard.css";
import default_img from "../../Assets/Image/Default/DefaultImg.jpg";
import { ReactComponent as Facebook } from "../../Assets/Icon/Facebook.svg";
import { ReactComponent as Instagram } from "../../Assets/Icon/Instagram.svg";
import { ReactComponent as Youtube } from "../../Assets/Icon/Youtube.svg";
import { ReactComponent as Tiktok } from "../../Assets/Icon/Tiktok.svg";
import { ReactComponent as Location } from "../../Assets/Icon/Location.svg";
import { Tooltip } from "antd";

const AdminApproveCard = () => {
  const profileInflu = {
    id: "1",
    fullName: "Le Quang Hieu",
    type: "Citizen",
    topics: [
      "Baby",
      "Beauty",
      "Business",
      "Travel",
      "Game",
      "Film",
      "Personal perception",
      "Film",
      "Film",
      "Film",
    ],
    address: "Da Nang",
    gender: "Male",
    age: 22,
    relationship: "Married",
    bio: "Sang som thuc day bong thay minh qua dep trai, tieng hot thanh thot cua nhung chu chim vua sang, ngay vui lai len...",
    email: "hieupro123@gmail.com",
    phone: "0398357123",
  };
  return (
    <>
      <div className="profile-layout">
        <div className="profile-content-layout">
          <div className="profile-avatar-content">
            <img className="profile-avatar" src={default_img} alt="" />
            <div className="profile-content">
              <p className="profile-name">{profileInflu.fullName}</p>
              <div className="profile-location">
                <Location style={{ marginRight: "8px" }} />
                <p>{profileInflu.address}</p>
              </div>
              <div className="profile-topics">
                {profileInflu.topics.slice(0, 3).map((topic, index) => (
                  <div key={index} className="profile-topic">
                    <Tooltip placement="top" title={topic}>
                      <div>
                        {topic.length > 8 ? `${topic.slice(0, 8)}...` : topic}
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
            <p>1M</p>
          </div>
          <div className="profile-social">
            <Instagram />
            <p>1M</p>
          </div>
          <div className="profile-social">
            <Youtube />
            <p>1M</p>
          </div>
          <div className="profile-social">
            <Tiktok />
            <p>1M</p>
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
