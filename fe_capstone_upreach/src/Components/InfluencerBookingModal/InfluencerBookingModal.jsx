import "./InfluencerBookingModal.css";
import React from "react";
import { Button } from "antd";
const InfluencerBookingModal = ({ bookingItem }) => {
  //   console.log(bookingItem);
  return (
    <>
      <div className="influ-booking-modal">
        <div className="booking-modal-title">Detail Booking</div>
        <div className="booking-modal-content">
          <div className="content-header">
            Services
            <div className="content-line">
              <p className="line-title">Platform</p>
              <p className="line-content">{bookingItem.platform}</p>
            </div>
            <div className="content-line">
              <p className="line-title">Job Name</p>
              <p className="line-content">Quang cao tu lanh</p>
            </div>
          </div>
          <div className="content-body">
            Customer
            <div className="content-line">
              <p className="line-title">Full Name</p>
              <p className="line-content">{bookingItem.name}</p>
            </div>
            <div className="content-line">
              <p className="line-title">Brand Name</p>
              <p className="line-content">{bookingItem.brandName}</p>
            </div>
            <div className="content-line">
              <p className="line-title">Content</p>
              <p className="line-content">{bookingItem.content}</p>
            </div>
            <div className="content-line">
              <p className="line-title">Quantities</p>
              <p className="line-content">{bookingItem.quantities}</p>
            </div>
            <div className="content-line">
              <p className="line-title">Link</p>
              <p className="line-content">facebook.com</p>
            </div>
            <div className="content-line">
              <p className="line-title">Cost Estimate From</p>
              <p className="line-content">{bookingItem.costFrom}</p>
            </div>
            <div className="content-line">
              <p className="line-title">Cost Estimate To</p>
              <p className="line-content">{bookingItem.costTo}</p>
            </div>
            <div className="content-line">
              <p className="line-title">Describes</p>
              <p className="line-content">
                Quay cai tu lanh thiet la
                depaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </p>
            </div>
            <div className="content-line">
              <p className="line-title">Start Date</p>
              <p className="line-content">{bookingItem.startDate}</p>
            </div>
            <div className="content-line">
              <p className="line-title">End Date</p>
              <p className="line-content">{bookingItem.endDate}</p>
            </div>
          </div>
          <div className="content-footer">
            <Button
              className="mail-box-btn"
              type="primary"
              // htmlType="submit"
            >
              Chat with Client
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfluencerBookingModal;
