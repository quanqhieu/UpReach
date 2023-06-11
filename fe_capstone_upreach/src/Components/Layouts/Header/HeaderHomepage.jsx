import React from "react";
import { Space, Typography } from "antd";
import Buttons from "../../UI/Buttons";
import "./HeaderHomepage.css";

const HeaderHomepage = () => {
  return (
    <div className="HeaderHomepage">
      <div className="row">
        <div className="col-1 h3 fw-bold ms-4 me-5 mt-2 logoText">UpReach</div>
        <div className="col-7 ms-5">
          <div className="row">
            <a href="####" className="col-2 navHeader mt-3">
              Home
            </a>
            <a href="#####" className="col-2 navHeader mt-3">
              Explore
            </a>
            <a href="######" className="col-2 navHeader mt-3">
              How it work
            </a>
            <a href="#######" className="col-2 navHeader mt-3">
              Blog
            </a>
          </div>
        </div>
        <div className="col-3 ms-1 text-center mt-2">
          <Buttons text="Login" type="link" />
          <Buttons text="Join as brand" shape="round" type="primary" />
        </div>
      </div>
      <div className="Menu"></div>
    </div>
  );
};

export default HeaderHomepage;
{
  /* <Space>
        <div className="h3 fw-bold ms-4 me-5 mt-2 logoText">UpReach</div>
        <div className="Menu">
          <Space align="center">
            <Typography.Text className="navHeader mx-3">Home</Typography.Text>
            <Typography.Text className="navHeader mx-3">
              Explore
            </Typography.Text>
            <Typography.Text className="navHeader mx-3">
              How it work
            </Typography.Text>
            <Typography.Text className="navHeader mx-3">Blog</Typography.Text>
          </Space>
        </div>
        <div className="SingUp">
          <Space>
            <Buttons text="Login" type="link" />
            <Buttons text="Join as brand" shape="round" type="primary" />
          </Space>
        </div>
      </Space> */
}
