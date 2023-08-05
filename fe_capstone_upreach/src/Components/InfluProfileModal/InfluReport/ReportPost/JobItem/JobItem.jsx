import React from "react";
import "./JobItem.css";
import { ReactComponent as Facebook } from "../../../../../Assets/Icon/Facebook.svg";
import { Button, Modal } from "antd";
import { ExclamationCircleOutlined, LoadingOutlined } from "@ant-design/icons";
import ClientBookingModal from "../../../../../Components/ClientBookingModal/ClientBookingModal";

const JobItem = () => {
  const [isChange, setIsChange] = React.useState(false);
  const [openConfirmForm, setOpenConfirmForm] = React.useState(false);

  const [isOpenBooking, setIsOpenBooking] = React.useState(false);

  const handleOpenModal = () => {
    setIsOpenBooking(true);
  };

  const handleClose = () => {
    if (isChange) {
      setOpenConfirmForm(true);
    } else {
      setIsOpenBooking(false);
    }
  };

  const handleCloseConfirmForm = () => {
    setOpenConfirmForm(false);
    setIsChange(false);
    setIsOpenBooking(false);
  };

  return (
    <>
      <Modal
        centered
        icon={ExclamationCircleOutlined}
        title={
          <div style={{ display: "flex", alignItems: "center" }}>
            <ExclamationCircleOutlined
              style={{ marginRight: "5px", color: "#faad14" }}
            />
            <p>Confirm</p>
          </div>
        }
        open={openConfirmForm}
        onOk={handleCloseConfirmForm}
        onCancel={() => setOpenConfirmForm(false)}
        okText="Ok"
        cancelText="Cancel"
        width="400px"
      >
        <div style={{ padding: "10px 40px" }}>
          <p>Sure to cancel?</p>
        </div>
      </Modal>
      <Modal
        className="custom-modal"
        centered
        open={isOpenBooking}
        footer={null}
        onCancel={() => setIsOpenBooking(false)}
        width={900}
        bodyStyle={{ borderRadius: "30px" }}
      >
        <ClientBookingModal setIsChange={setIsChange} />
      </Modal>
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
          <p>Cost Estimate: 1000000 ~ 2000000 VND</p>
        </div>
        <div className="post-item-btn">
          <Button
            className="booking-btn"
            type="primary"
            onClick={handleOpenModal}
          >
            Booking
          </Button>
        </div>
      </div>
    </>
  );
};
export default JobItem;
