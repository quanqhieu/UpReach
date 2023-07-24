import React from "react";
import "./InfluencerReportLayout.css";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import InfluencerProfileCard from "../../../../Components/InfluencerProfileCard/InfluencerProfileCard";
import InfluUpdateProfileModal from "../../../../Components/InfluUpdateProfileModal/InfluUpdateProfileModal";
import { ReactComponent as IconArrow } from "../../../../Assets/Icon/IconArrow.svg";
import { List, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import Buttons from "../../../../Components/UI/Buttons";
import { VERSION_PROFILE_INFLU } from "../../../HomePage/ConstHomePage";
import { useInfluStore } from "../../../../Stores/influencer";
import { useUserStore } from "../../../../Stores/user";

const InfluencerReportLayout = () => {
  // const [influ] = useInfluStore((state) => [state.influ]);
  const [user] = useUserStore((state) => [state.user]);
  const [previewInflu, setPreviewInflu] = React.useState(user);
  const [isChange, setIsChange] = React.useState(false);
  // const [isClose, setIsClose] = React.useState(false);
  const [openConfirmForm, setOpenConfirmForm] = React.useState(false);
  const [isOpenProfileInflu, setIsOpenProfileInflu] = React.useState(false);

  const [versionProfile, setVersionProfile] = React.useState(
    VERSION_PROFILE_INFLU
  );

  const handleOpenModal = () => {
    setIsOpenProfileInflu(true);
  };

  // React.useEffect(() => {
  //   setIsOpenProfileInflu(false);
  // }, [influInfo]);

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
    // setIsClose(true);
    if (isChange) {
      setOpenConfirmForm(true);
    } else {
      setIsOpenProfileInflu(false);
      // setIsClose(false);
    }
  };

  const handleCloseConfirmForm = () => {
    setOpenConfirmForm(false);
    setIsChange(false);
    setIsOpenProfileInflu(false);
    setPreviewInflu(user);
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
        open={isOpenProfileInflu}
        footer={null}
        afterClose={handleClose}
        onCancel={handleClose}
        width={1400}
        bodyStyle={{ borderRadius: "30px" }}
      >
        <InfluUpdateProfileModal
          setIsChange={setIsChange}
          // user={user}
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
        <div className="col-12 mt-3">
          <div className="button-block mt-5">
            <Buttons
              className="update-btn"
              text="Update Now"
              icon={<IconArrow />}
              onClick={() => handleOpenModal()}
            />
          </div>
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
