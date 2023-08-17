import React from "react";
import "./ClientHistoryBookingCard.css";
import { Icon } from "@iconify/react";
import { Modal, message, Button } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import ClientHistoryBookingModal from "../ClientHistoryBookingModal/ClientHistoryBookingModal";
// import { useUserStore } from "../../Stores/user";
import axios from "axios";

const ClientHistoryBookingCard = ({ bookingList }) => {
  // const [user] = useUserStore((state) => [state.user]);
  const [bookingDetail, setBookingDetail] = React.useState("");
  const [isOpenBooking, setIsOpenBooking] = React.useState(false);
  const [status, setStatus] = React.useState(bookingList.status);

  const handleOpenModal = (info) => {
    setBookingDetail(info);
    setIsOpenBooking(true);
  };

  const handleDone = (info) => {
    setStatus((info.status = "Done"));
    const formData = new FormData();
    formData.append("booking", JSON.stringify(info));

    axios
      .put("http://localhost:4000/api/client/check-done", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // setForce((prev) => prev + 1);
      })
      .catch((error) => {
        console.error("Lỗi khi cập nhật thông tin:", error);
      });
  };

  const showConfirm = (info, action) => {
    Modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: `Are you sure you want to ${action} this booking?`,
      okText: "Yes",
      okButtonProps: {
        disabled: info.status !== "Processing",
      },
      cancelText: "No",
      onOk() {
        if (action === "Done") {
          handleDone(info);
        }
        message.success(`Successful!`);
      },
    });
  };
  const getFormatContent = (id) => {
    switch (id) {
      case "CF01":
        return "Text";
      case "CF02":
        return "Picture";
      case "CF03":
        return "Video";
      default:
        return null;
    }
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
        <ClientHistoryBookingModal bookingItem={bookingDetail} />
      </Modal>
      <div className="client-history-card">
        <div className="client-history-card-content">
          <p style={{ width: "18.8%" }}>{bookingList.kolName}</p>
          <p style={{ width: "12.1%" }}>{bookingList.platform}</p>
          <p style={{ width: "17.1%" }}>
            {getFormatContent(bookingList?.formatContent)}
          </p>

          <p style={{ width: "10%" }}>{bookingList.quantity}</p>
          <p style={{ width: "12%" }}>{bookingList.status}</p>
          <p style={{ width: "15%" }}>{bookingList.startDate}</p>
          <p style={{ width: "15%" }}>{bookingList.endDate}</p>
        </div>
        <div className="client-history-card-icons">
          <div className="client-history-card-icon">
            <Icon
              icon="majesticons:open"
              width="26"
              height="26"
              onClick={() => handleOpenModal(bookingList)}
            />
          </div>

          <Button
            className="client-history-card-icon"
            onClick={() => showConfirm(bookingList, "Done")}
            disabled={
              bookingList.status === "Done" ||
              bookingList.status === "Pending" ||
              bookingList.status === "Rejected"
            }
            icon={
              <Icon
                icon="iconoir:check"
                color={
                  bookingList.status === "Done" ||
                  bookingList.status === "Pending" ||
                  bookingList.status === "Rejected"
                    ? "#ccc"
                    : "#0bfa00"
                }
                width="30"
                height="30"
              />
            }
          ></Button>
          <Button
            className="client-history-card-feedback"
            type="link"
            // onClick={() => showConfirm(bookingList, "Done")}
            disabled={
              bookingList.status === "Pending" ||
              bookingList.status === "Processing" ||
              bookingList.status === "Rejected"
            }
          >
            Send feedback
          </Button>
        </div>
      </div>
    </>
  );
};

export default ClientHistoryBookingCard;
