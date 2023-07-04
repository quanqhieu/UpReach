import React, { useState } from "react";
import "./ProfileCardLayout.css";
import { Col, Row } from "antd";
import ProfileCardComponent from "../../../Components/Layouts/ProfileCardComponent/ProfileCardComponent";
import InfluProfile from "../../../Components/InfluProfileModal/InfluProfile";
import { Modal, Pagination } from "antd";
import { PROFILE_INFLUS } from "../ConstHomePage";

const ProfileCardLayout = () => {
  const [influInfo, setInfluInfo] = useState("");
  const [isOpenProfileInflu, setIsOpenProfileInflu] = useState(false);

  const [profileInflus, setProfileInflus] = useState(PROFILE_INFLUS);

  const handleOpenModal = (info) => {
    setInfluInfo(info);
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
        style={{ backgroundColor: "#ccc", borderRadius: "30px" }}
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
        <Row gutter={[16, 16]}>
          {profileInflus.map((profileInflu, index) => (
            <Col
              key={index}
              span={5.5}
              className="profile-card"
              onClick={() => handleOpenModal(profileInflu)}
            >
              <ProfileCardComponent profileInflu={profileInflu} />
            </Col>
          ))}
        </Row>
        <Pagination
          itemRender={itemRender}
          total={profileInflus.length}
          pageSize={12}
          showSizeChanger={false}
          className="profile-pagination"
        />
      </div>
    </>
  );
};

export default ProfileCardLayout;
