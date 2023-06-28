import "./ProfileCardComponent.css";
import default_img from "../../../Assets/Image/Default/DefaultImg.jpg";
import { ReactComponent as Facebook } from "../../../Assets/Icon/Facebook.svg";
import { ReactComponent as Instagram } from "../../../Assets/Icon/Instagram.svg";
import { ReactComponent as Youtube } from "../../../Assets/Icon/Youtube.svg";
import { ReactComponent as Tiktok } from "../../../Assets/Icon/Tiktok.svg";
import { ReactComponent as Location } from "../../../Assets/Icon/Location.svg";
import { ReactComponent as Addlist } from "../../../Assets/Icon/Addlist.svg";

const ProfileCardComponent = () => {
  return (
    <>
      <div className="profile-layout">
        <div className="profile-content-layout">
          <div className="profile-avatar-content">
            <img className="profile-avatar" src={default_img} alt="" />
            <div className="profile-content">
              <p className="profile-name">fullName</p>
              <div className="profile-location">
                <Location style={{ marginRight: "8px" }} />
                <p>Da Nang</p>
              </div>
              <div className="profile-topic">topic</div>
            </div>
          </div>
          <div className="profile-add-list">
            <Addlist />
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
export default ProfileCardComponent;
