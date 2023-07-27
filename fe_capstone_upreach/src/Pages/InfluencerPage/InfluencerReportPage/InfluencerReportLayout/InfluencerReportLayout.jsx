import React from "react";
import "./InfluencerReportLayout.css";
import InfluencerProfileCard from "../../../../Components/InfluencerProfileCard/InfluencerProfileCard";
import InfluUpdateProfileModal from "../../../../Components/InfluUpdateProfileModal/InfluUpdateProfileModal";
import { ReactComponent as IconArrow } from "../../../../Assets/Icon/IconArrow.svg";
import { List, Modal, Dropdown, Space } from "antd";
import { ExclamationCircleOutlined, DownOutlined } from "@ant-design/icons";
import Buttons from "../../../../Components/UI/Buttons";
import { VERSION_PROFILE_INFLU } from "../../../HomePage/ConstHomePage";
// import { useInfluStore } from "../../../../Stores/influencer";
import { useUserStore } from "../../../../Stores/user";

const InfluencerReportLayout = () => {
  // const [influ] = useInfluStore((state) => [state.influ]);
  const [user] = useUserStore((state) => [state.user]);
  const [previewInflu, setPreviewInflu] = React.useState(user);
  const [isChange, setIsChange] = React.useState(false);
  // const [isClose, setIsClose] = React.useState(false);

  const [openConfirmForm, setOpenConfirmForm] = React.useState(false);
  const [isOpenProfileInflu, setIsOpenProfileInflu] = React.useState(false);

  // const countdownElement = document.getElementById("countdown");
  // const updateButton = document.querySelector(".update-btn");

  const [versionProfile, setVersionProfile] = React.useState(
    VERSION_PROFILE_INFLU
  );

  const handleOpenModal = () => {
    setIsOpenProfileInflu(true);
  };

  const [sortOption, setSortOption] = React.useState("Choose Option");
  const items = [
    {
      label: (
        <p
          onClick={(e) => {
            setSortOption(e.target.innerText);
          }}
        >
          Monthly
        </p>
      ),
      key: "0",
    },
    {
      label: (
        <p
          onClick={(e) => {
            setSortOption(e.target.innerText);
          }}
        >
          Yearly
        </p>
      ),
      key: "1",
    },
  ];
  const handleClose = () => {
    if (isChange) {
      setOpenConfirmForm(true);
    } else {
      setIsOpenProfileInflu(false);
    }
  };

  const handleCloseConfirmForm = () => {
    setOpenConfirmForm(false);
    setIsChange(false);
    setIsOpenProfileInflu(false);
    setPreviewInflu(user);
  };

  // const updateCountdown = (countDownTime) => {
  //   const countdownDate = new Date();
  //   countdownDate.setDate(countdownDate.getDate() + 7); // Set the countdown to 7 days from now

  //   const updateInterval = setInterval(() => {
  //     const now = new Date().getTime();
  //     const timeLeft = countdownDate - now;

  //     const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //     const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  //     const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  //     if (timeLeft <= 0) {
  //       countdownElement.textContent = "0 days left to update";
  //       clearInterval(updateInterval);

  //       // Enable the Update Now button when the countdown reaches 0
  //       updateButton.disabled = false;
  //     } else {
  //       countdownElement.textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds left to update`;
  //     }
  //   }, 1000);
  // }

  // // Call the updateCountdown function to start the countdown
  // updateCountdown(7); // Here, you can pass any number of days you want for the countdown

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
        open={isOpenProfileInflu}
        footer={null}
        afterClose={handleClose}
        onCancel={handleClose}
        width={1400}
        bodyStyle={{ borderRadius: "30px" }}
      >
        <InfluUpdateProfileModal
          setIsChange={setIsChange}
          previewInflu={previewInflu}
          setPreviewInflu={setPreviewInflu}
        />
      </Modal>
      <div className="influencer-report-layout">
        <div className="influencer-report-title">
          <p>VERSION REPORT</p>
          <div className="report-filter">
            <div className="report-sort-by">
              <Dropdown menu={{ items }} trigger={"click"}>
                <a>
                  <Space>Monthly</Space>
                </a>
              </Dropdown>
              <DownOutlined />
            </div>
          </div>
        </div>

        <div className="update-block">
          {/* <p id="countdown">7 days left to update</p> */}
          <Buttons
            className="update-btn"
            text="Update Now"
            icon={<IconArrow />}
            onClick={() => handleOpenModal()}
          />
        </div>

        <div className="influencer-report-list">
          <List
            grid={{
              xs: 1,
              sm: 2,
              md: 3,
              lg: 3,
              xl: 3,
              xxl: 3,
            }}
            pagination={{
              onChange: (page) => {
                console.log(page);
              },

              pageSize: 6,
              position: "bottom",
              align: "center",
            }}
            dataSource={versionProfile}
            renderItem={(item) => (
              <List.Item
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "423px",
                  height: "270px",
                }}
              >
                <InfluencerProfileCard profileInflu={item} />
              </List.Item>
            )}
          />
        </div>
      </div>
    </>
  );
};
export default InfluencerReportLayout;
