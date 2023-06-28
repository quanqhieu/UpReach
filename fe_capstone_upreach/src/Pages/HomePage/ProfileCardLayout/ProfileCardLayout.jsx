import React from "react";
import "./ProfileCardLayout.css";
import { Col, Row } from "antd";
import ProfileCardComponent from "../../../Components/Layouts/ProfileCardComponent/ProfileCardComponent";

const ProfileCardLayout = () => {
  return (
    <>
      <div className="profile-card-layout">
        <Row gutter={[16, 16]}>
          <Col span={5.5}>
            <ProfileCardComponent />
          </Col>
          <Col span={5.5}>
            <ProfileCardComponent />
          </Col>
          <Col span={5.5}>
            <ProfileCardComponent />
          </Col>
          <Col span={5.5}>
            <ProfileCardComponent />
          </Col>

          <Col span={5.5}>
            <ProfileCardComponent />
          </Col>
          <Col span={5.5}>
            <ProfileCardComponent />
          </Col>
          <Col span={5.5}>
            <ProfileCardComponent />
          </Col>
          <Col span={5.5}>
            <ProfileCardComponent />
          </Col>

          <Col span={5.5}>
            <ProfileCardComponent />
          </Col>
          <Col span={5.5}>
            <ProfileCardComponent />
          </Col>
          <Col span={5.5}>
            <ProfileCardComponent />
          </Col>
          <Col span={5.5}>
            <ProfileCardComponent />
          </Col>

          <Col span={5.5}>
            <ProfileCardComponent />
          </Col>
          <Col span={5.5}>
            <ProfileCardComponent />
          </Col>
          <Col span={5.5}>
            <ProfileCardComponent />
          </Col>
          <Col span={5.5}>
            <ProfileCardComponent />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProfileCardLayout;
