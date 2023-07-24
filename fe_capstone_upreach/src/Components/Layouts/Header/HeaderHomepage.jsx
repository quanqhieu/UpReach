import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
import { useCookies } from "react-cookie";

import "./HeaderHomepage.css";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../../../Stores/user";

function RenderContent({ onClick }) {
  return (
    <div className="headerContent">
      <div className="logoText" onClick={onClick}>
        UpReach
      </div>
      {/* <div className="navBar">
        <div className="nav" onClick={onClick}>
          Home
        </div>
        <div className="nav" onClick={onClick}>
          Explore
        </div>
        <div className="nav" onClick={onClick}>
          How it work
        </div>
        <div className="nav" onClick={onClick}>
          Blogs
        </div>
      </div> */}
    </div>
  );
}

const HeaderHomepage = ({ handleClickHomePage, handleCLickIntroduce }) => {
  let navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [user, setUserInfo] = useUserStore((state) => [
    state.user,
    state.setUserInfo,
  ]);

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
  console.log(user);
  return (
    <div className="HeaderHomepage">
      <RenderContent onClick={handleClickHomePage} />
      <div className="authBtn">
        {user.userId || user.influencerId ? (
          <div className="influencer-btn">
            <img
              className="influencer-avatar"
              src="https://demoda.vn/wp-content/uploads/2022/09/hinh-anh-avatar-anime-nu.jpg"
              alt="anh"
            />

            <div className="influencer-dropdown-block">
              <Dropdown menu={{ items }} trigger={"click"}>
                <p>
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
        ) : (
          <div>
            <Link to="/login">
              <Button className="loginBtn" type="link">
                <p style={{ fontWeight: "700", marginTop: "-2px" }}>Login</p>
              </Button>
            </Link>
            <Link to="/join-as-brand">
              <Button
                style={{ height: "35px" }}
                className="joinBtn"
                shape="round"
                type="primary"
              >
                Join as brand
              </Button>
            </Link>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderHomepage;
