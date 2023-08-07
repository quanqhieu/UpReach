import React, { useState, useEffect } from "react";
import "./ProfileCardLayout.css";
import { Col, Row } from "antd";
import ProfileCardComponent from "../../../Components/Layouts/ProfileCardComponent/ProfileCardComponent";
import InfluProfile from "../../../Components/InfluProfileModal/InfluProfile";
import { Modal, Pagination, List } from "antd";
import { PROFILE_INFLUS } from "../ConstHomePage";
import ApiGetInfoAndFilterInfluencer from "../../../Api/ApiGetInfoAndFilterInfluencer";

const ProfileCardLayout = () => {
  const [influInfo, setInfluInfo] = useState("");
  const [isOpenProfileInflu, setIsOpenProfileInflu] = useState(false);
  const [allInfluencer, setAllInfluencer] = useState();

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
  // BE get Influencer
  const fetchDataGetList = async (pageNumber) => {
    try {
      const response = await ApiGetInfoAndFilterInfluencer.getAllInfluencer(
        pageNumber
      );
      for (var i = response.JsonData.data.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = response.JsonData.data[i];
        response.JsonData.data[i] = response.JsonData.data[j];
        response.JsonData.data[j] = temp;
      }
      setAllInfluencer(response);
      console.log(response);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  // ======================================================
  useEffect(() => {
    setAllInfluencer({});
    fetchDataGetList(1);
  }, []);

  return (
    <>
      <Modal
        className="custom-modal"
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
          dataSource={allInfluencer?.JsonData?.data}
          renderItem={(item) => (
            <List.Item
              style={{ display: "flex", flexDirection: "column" }}
              onClick={() => handleOpenModal(item)}
            >
              <ProfileCardComponent profileInflu={item} />
            </List.Item>
          )}
        />
      </div>
    </>
  );
};

export default ProfileCardLayout;
