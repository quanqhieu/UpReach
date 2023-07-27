import "./JobItem.css";
import { ReactComponent as Facebook } from "../../../../../Assets/Icon/Facebook.svg";

const JobItem = () => {
  return (
    <>
      <div className="report-post-item">
        <div className="post-item-title">
          <Facebook className="social-icon" />
          <div className="post-item-sub-title">
            <p>JobName</p>
            <div>Text, Video</div>
            <a>https://www.facebook.com/lilism3.s/</a>
          </div>
        </div>
        <div className="cover-quantity-cost">
          <p>Quantity: 1</p>
          <p>Cost Estimate: 1 ~ 2 VND</p>
        </div>
      </div>
    </>
  );
};
export default JobItem;
