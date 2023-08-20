import React, { useState, useEffect } from "react";
import "./ProfileCardLayout.css";
import ProfileCardComponent from "../../../Components/Layouts/ProfileCardComponent/ProfileCardComponent";
import InfluProfile from "../../../Components/InfluProfileModal/InfluProfile";
import { Modal, Spin, List } from "antd";
import { PROFILE_INFLUS } from "../ConstHomePage";
import ApiInfluencer from "../../../Api/ApiInfluencer";

const ProfileCardLayout = ({ allInfluencer, loading }) => {
  const [influInfo, setInfluInfo] = useState("");
  const [isOpenProfileInflu, setIsOpenProfileInflu] = useState(false);
  const [idInfluMongoDB, setIdInfluMongoDB] = useState();
  const [profileInflus, setProfileInflus] = useState(PROFILE_INFLUS);

  const handleOpenModal = async (info) => {
    try {
      const influencerEmail = info?.influencerEmail;
      const idInfluencerInMongoDB = await ApiInfluencer.getIDInfluencer(
        influencerEmail
      );
      setIdInfluMongoDB(idInfluencerInMongoDB.data._id);
      setInfluInfo(info);
      // console.log(info);
      setIsOpenProfileInflu(true);
    } catch (error) {
      console.log(error);
    }
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
        s
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
