import React, { useState } from "react";
import "./ProfileCardLayout.css";
import { Col, Row } from "antd";
import ProfileCardComponent from "../../../Components/Layouts/ProfileCardComponent/ProfileCardComponent";
import InfluProfile from "../../../Components/InfluProfileModal/InfluProfile";
import { Modal, Pagination } from "antd";

const ProfileCardLayout = () => {
  const [influInfo, setInfluInfo] = useState("");
  const [isOpenProfileInflu, setIsOpenProfileInflu] = useState(false);

  const [profileInflus, setProfileInflus] = useState([
    {
      id: "1",
      fullName: "Le Quang Hieu",
      type: "Citizen",
      topics: [
        "Baby",
        "Beauty",
        "Business",
        "Travel",
        "Game",
        "Film",
        "Personal perception",
        "Film",
        "Film",
        "Film",
      ],
      address: "Da Nang",
      gender: "Male",
      age: 22,
      relationship: "Married",
      bio: "Sang som thuc day bong thay minh qua dep trai, tieng hot thanh thot cua nhung chu chim vua sang, ngay vui lai len...",
      email: "hieupro123@gmail.com",
      phone: "0398357123",
    },
    {
      id: "2",
      fullName: "Vu Thi Thuy Trang",
      type: "Celebrity",
      address: "Ha Noi",
      topics: ["Beuaty", "Education"],
    },
    {
      id: "3",
      fullName: "Nguyen Nhat Minh",
      type: "Professional",
      address: "Da Nang",
      topics: ["Game", "Music", "Fashion"],
    },
    {
      id: "4",
      fullName: "Le Quang Hieu",
      address: "Da Nang",
      topics: ["Game", "Beauty", "Any"],
    },
    {
      id: "5",
      fullName: "Le Quang Hieu",
      address: "Da Nang",
      topics: ["Game", "Beauty", "Any"],
    },
    {
      id: "6",
      fullName: "Le Quang Hieu",
      address: "Da Nang",
      topics: ["Game", "Beauty", "Any"],
    },
    {
      id: "7",
      fullName: "Le Quang Hieu",
      address: "Da Nang",
      topics: ["Game", "Beauty", "Any"],
    },
    {
      id: "8",
      fullName: "Le Quang Hieu",
      address: "Da Nang",
      topics: ["Game", "Beauty", "Any"],
    },
    {
      id: "9",
      fullName: "Le Quang Hieu",
      address: "Da Nang",
      topics: ["Game", "Beauty", "Any"],
    },
    {
      id: "10",
      fullName: "Le Quang Hieu",
      address: "Da Nang",
      topics: ["Game", "Beauty", "Any"],
    },
    {
      id: "11",
      fullName: "Le Quang Hieu",
      address: "Da Nang",
      topics: ["Game", "Beauty", "Any"],
    },
    {
      id: "12",
      fullName: "Le Quang Hieu",
      address: "Da Nang",
      topics: ["Game", "Beauty", "Any"],
    },
    {
      id: "13",
      fullName: "Le Quang Hieu",
      address: "Da Nang",
      topics: ["Game", "Beauty", "Any"],
    },
    {
      id: "14",
      fullName: "Le Quang Hieu",
      address: "Da Nang",
      topics: ["Game", "Beauty", "Any"],
    },
    {
      id: "15",
      fullName: "Le Quang Hieu",
      address: "Da Nang",
      topics: ["Game", "Beauty", "Any"],
    },
  ]);

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
