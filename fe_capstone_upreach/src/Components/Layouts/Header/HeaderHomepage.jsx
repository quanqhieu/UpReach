import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Button, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

import "./HeaderHomepage.css";
import { UPREACH } from "../../Constant/Const";
import { useUserStore } from "../../../Stores/user";

function RenderLogo({ onClickIntroduce }) {
  return (
    <div className="headerContent">
      <div className="logoText" onClick={onClickIntroduce}>
        {UPREACH}
      </div>
    </div>
  );
}

function RenderContent({ onClickHomeMain, onClickMyInfluencer }) {
  return (
    <div className="headerContent">
      <div className="navBar">
        <div className="nav" onClick={onClickHomeMain}>
          Home
        </div>
        <div className="nav" onClick={onClickMyInfluencer}>
          Explore
        </div>
        <div className="nav" onClick={onClickHomeMain}>
          How it work
        </div>
        <div className="nav" onClick={onClickHomeMain}>
          Blogs
        </div>
      </div>
    </div>
  );
}

const HeaderHomepage = (onClickIntroduce) => {
  let navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [user, setUserInfo] = useUserStore((state) => [
    state.user,
    state.setUserInfo,
  ]);

  //click button will go to home page not logged in yet
  const navigateIntroduce = () => {
    navigate("/");
  };

  //click button will go to home page have token
  const navigateHomeMain = () => {
    navigate("/homepage");
  };

  const navigateMyInfluencer = () => {
    navigate("/myinfluencer");
  };

  const handleLogout = () => {
    removeCookie("token", { path: "/" });
    setUserInfo({});
    localStorage.removeItem("user-draw-storage");
    navigate("/");
  };
  const items = [
    {
      label: <p>Profile</p>,
      key: "0",
    },
    {
      label: <p onClick={handleLogout}>Logout</p>,
      key: "1",
    },
  ];

  return (
    <div className="HeaderHomepage">
      <RenderLogo onClickIntroduce={navigateIntroduce} />
      <div className="authBtn">
        {user.influencerId ? (
          <div className="influencer-btn">
            <img
              className="influencer-avatar"
              src="https://demoda.vn/wp-content/uploads/2022/09/hinh-anh-avatar-anime-nu.jpg"
              alt="anh"
            />

            <div className="influencer-dropdown-block">
              <Dropdown menu={{ items }} trigger={"click"}>
                <p style={{ height: "45px" }}>
                  <Space>
                    <div>
                      {user.influencerfullName.length > 14
                        ? `${user.influencerfullName.slice(0, 14)}...`
                        : user.influencerfullName}
                    </div>
                  </Space>
                  <DownOutlined />
                </p>
              </Dropdown>
            </div>
          </div>
        ) : user.clientId ? (
          <div className="cover-client-login">
            <Link to="/myinfluencer">
              <Button className="my-list-btn" type="primary">
                My Influencer
              </Button>
            </Link>

            <div className="influencer-btn">
              <img
                className="influencer-avatar"
                src="https://demoda.vn/wp-content/uploads/2022/09/hinh-anh-avatar-anime-nu.jpg"
                alt="anh"
              />

              <div className="influencer-dropdown-block">
                <Dropdown menu={{ items }} trigger={"click"}>
                  <p style={{ height: "45px" }}>
                    <Space>
                      <div>
                        {user.fullName.length > 14
                          ? `${user.fullName.slice(0, 14)}...`
                          : user.fullName}
                      </div>
                    </Space>
                    <DownOutlined />
                  </p>
                </Dropdown>
              </div>
            </div>
          </div>
        ) : (
          <div className="landing-page-header">
            <RenderContent onClickHomeMain={navigateHomeMain} />
            <div className="cover-login-sign-up">
              <Link to="/login">
                <Button className="loginBtn" type="link">
                  <p style={{ fontWeight: "700", marginTop: "-2px" }}>Login</p>
                </Button>
              </Link>
              <Link to="/sign-up">
                <Button
                  style={{ height: "35px" }}
                  className="joinBtn"
                  shape="round"
                  type="primary"
                >
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderHomepage;
