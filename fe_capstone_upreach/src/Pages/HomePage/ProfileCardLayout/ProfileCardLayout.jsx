import React, { useState, useEffect } from "react";
import "./ProfileCardLayout.css";
import ProfileCardComponent from "../../../Components/Layouts/ProfileCardComponent/ProfileCardComponent";
import InfluProfile from "../../../Components/InfluProfileModal/InfluProfile";
import { Modal, Spin, List } from "antd";
import { PROFILE_INFLUS } from "../ConstHomePage";

const ProfileCardLayout = ({ allInfluencer, loading }) => {
  const [influInfo, setInfluInfo] = useState("");
  const [isOpenProfileInflu, setIsOpenProfileInflu] = useState(false);
  const [profileInflus, setProfileInflus] = useState(PROFILE_INFLUS);

  const handleOpenModal = (info) => {
    setInfluInfo(info);
    console.log(info);
    setIsOpenProfileInflu(true);
  };

  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };

  return (
    <>
      <Modal
        className="custom-modal"
        destroyOnClose={true}
        centered
        open={isOpenProfileInflu}
        footer={null}
        onCancel={() => setIsOpenProfileInflu(false)}
        width={1400}
        bodyStyle={{ borderRadius: "30px" }}
      >
        <InfluProfile profileInflu={influInfo} />
      </Modal>

      <div className="profile-card-layout">
        <Spin size="large" spinning={loading}>
          <List
            grid={{
              xs: 1,
              sm: 2,
              md: 3,
              lg: 3,
              xl: 3,
              xxl: 4,
            }}
            pagination={{
              onChange: (page) => {
                // fetchDataGetList(page);
              },
              pageSize: 12,
              position: "bottom",
              align: "center",
            }}
            dataSource={allInfluencer?.Influencer}
            renderItem={(item) => (
              <List.Item
                style={{ display: "flex", flexDirection: "column" }}
                onClick={() => handleOpenModal(item)}
              >
                <ProfileCardComponent profileInflu={item} />
              </List.Item>
            )}
          />
        </Spin>
      </div>
    </>
  );
};

export default ProfileCardLayout;
