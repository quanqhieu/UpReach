import React from "react";
import "./InfluencerBookingCard.css";
import { Icon } from "@iconify/react";

const InfluencerBookingCard = ({ bookingList }) => {
  return (
    <>
      <div className="influ-booking-card">
        <div className="influ-booking-card-content">
          <p style={{ width: "14.6%" }}>{bookingList.name}</p>
          <p style={{ width: "18.8%" }}>{bookingList.brandName}</p>
          <p style={{ width: "12.1%" }}>{bookingList.platform}</p>
          <p style={{ width: "13.1%" }}>{bookingList.content}</p>
          <p style={{ width: "14%" }}>
            {bookingList.cost.toLocaleString("en-US")} VND
          </p>
          <p style={{ width: "12.4%" }}>{bookingList.status}</p>
          <p style={{ width: "15%" }}>{bookingList.createdDate}</p>
        </div>
        <div className="influ-booking-card-icon">
          <Icon icon="iconoir:cancel" color="#fa0000" width="30" height="30" />
        </div>
        <div className="influ-booking-card-icon">
          <Icon icon="ic:round-check" color="#00dd1a" width="30" height="30" />
        </div>
      </div>
    </>
  );
};

export default InfluencerBookingCard;
