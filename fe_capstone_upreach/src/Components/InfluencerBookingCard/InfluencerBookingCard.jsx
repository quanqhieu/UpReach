import React from "react";
import "./InfluencerBookingCard.css";
import { Icon } from "@iconify/react";
import { Modal, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import InfluencerBookingModal from "../InfluencerBookingModal/InfluencerBookingModal";

const InfluencerBookingCard = ({ bookingList }) => {
  const [bookingDetail, setBookingDetail] = React.useState("");
  const [isOpenBooking, setIsOpenBooking] = React.useState(false);
  const [status, setStatus] = React.useState(bookingList);

  const handleOpenModal = (info) => {
    setBookingDetail(info);
    setIsOpenBooking(true);
  };

  const handleReject = (info) => {
    console.log(info);
    setStatus((info.status = "Reject"));
  };

  const handleProcessing = (info) => {
    console.log(info);
    setStatus((info.status = "Processing"));
  };

  const showConfirm = (info, action) => {
    Modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: `Are you sure you want to ${action} this booking?`,
      okText: "Yes",
      okButtonProps: {
        disabled: info.status !== "Pending",
      },
      cancelText: "No",
      onOk() {
        if (action === "Reject") {
          handleReject(info);
        } else if (action === "Processing") {
          handleProcessing(info);
        }
        message.success(`Successful!`);
      },
    });
  };

  return (
    <>
      <Modal
        className="custom-modal"
        centered
        open={isOpenBooking}
        footer={null}
        onCancel={() => setIsOpenBooking(false)}
        width={900}
        bodyStyle={{ borderRadius: "30px" }}
      >
        <InfluencerBookingModal bookingItem={bookingDetail} />
      </Modal>
      <div className="influ-booking-card">
        <div className="influ-booking-card-content">
          <p style={{ width: "14.6%" }}>{bookingList.name}</p>
          <p style={{ width: "18.8%" }}>{bookingList.brandName}</p>
          <p style={{ width: "12.1%" }}>{bookingList.platform}</p>
          <p style={{ width: "17.1%" }}>{bookingList.content}</p>
          <p style={{ width: "10%" }}>{bookingList.quantities}</p>
          <p style={{ width: "12.4%" }}>{bookingList.status}</p>
          <p style={{ width: "15%" }}>{bookingList.createdDate}</p>
        </div>
        <div className="influ-booking-card-icons">
          <div className="influ-booking-card-icon">
            <Icon
              icon="majesticons:open"
              width="26"
              height="26"
              onClick={() => handleOpenModal(bookingList)}
            />
          </div>

          <div
            className="influ-booking-card-icon"
            onClick={() => showConfirm(bookingList, "Reject")}
          >
            <Icon
              icon="iconoir:cancel"
              color="#fa0000"
              width="30"
              height="30"
            />
          </div>

          <div
            className="influ-booking-card-icon"
            onClick={() => showConfirm(bookingList, "Processing")}
          >
            <Icon
              icon="ic:round-check"
              color="#00dd1a"
              width="30"
              height="30"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InfluencerBookingCard;
