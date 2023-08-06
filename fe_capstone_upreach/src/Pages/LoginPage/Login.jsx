import { Button, Form, Input, Spin } from "antd";
import React from "react";
import "./Login.css";
import { ReactComponent as IconGoogle } from "../../../src/Assets/Icon/google-icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import AuthBackground from "../../Components/Layouts/AuthBackground/AuthBackground";
import { UPREACH } from "../../Components/Constant/Const";
import axiosClient from "../../Api/AxiosClient";
import { useUserStore } from "../../Stores/user";
import { useCookies } from "react-cookie";

const Login = () => {
  const [setUserInfo] = useUserStore((state) => [state.setUserInfo]);

  const [isLoading, setIsLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [cookies, setCookie] = useCookies();
  let navigate = useNavigate();

  const handleSubmit = (data) => {
    setIsLoading(true);
    axiosClient
      .post("/login", {
        email: data.email,
        password: data.password,
      })
      .then(
        (response) => {
          setIsLoading(false);
          if (response.data.User.roleId == 2) {
            setUserInfo(response.data.User);
            navigate("/homepage");
          }
          if (response.data.User.roleId == 3) {
            setUserInfo(response.data.User);
            navigate("/influencer/my-report");
          }
          setCookie("token", response.data.User.Sessions_ID, {
            path: "/",
            maxAge: 30 * 24 * 60 * 60,
          });
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <>
      <AuthBackground>
        <div className="logInLayout">
          <Link to="/">
            <p className="logInTitle">{UPREACH}</p>
          </Link>
          <Form
            name="login"
            className="logInForm"
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
          >
            <Spin tip="Loading" size="large" spinning={isLoading}>
              <Button type="primary" className="login-google">
                <div className="GoogleIcon">{<IconGoogle />}</div>
                <p style={{ fontWeight: "600" }}>Login with Google</p>
              </Button>
              <div className="logInSubTitle">
                <p className="logInSubTitleContent">Email address </p>
                <p className="logInSubChar">*</p>
              </div>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                  { type: "email", message: "Invalid email" },
                ]}
              >
                <Input
                  className="logInTypeBtn heightLogInBtn"
                  placeholder="Youremail@example.com"
                />
              </Form.Item>
              <div className="logInSubTitle">
                <p className="logInSubTitleContent">Password</p>
                <p className="logInSubChar">*</p>
              </div>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                  { min: 5, message: "Enter as least 8 characters" },
                ]}
              >
                <Input.Password
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                  type="password"
                  className="logInTypeBtn heightLogInBtn"
                  placeholder="Enter your password at least 8 characters"
                />
              </Form.Item>
              <Button type="primary" htmlType="submit" className="logInBtn">
                <span className="logInBtnText">Login</span>
              </Button>
              <div className="feature-block">
                <Button className="logInToForgotPasswordLink" type="link">
                  <p>Forgot password?</p>
                </Button>
              </div>
              <div className="logInToSignUp">
                <p>New to UpReach?</p>
                <Link to="/sign-up">
                  <Button className="logInToSignUpLink" type="link">
                    <p>Create an account</p>
                  </Button>
                </Link>
              </div>
            </Spin>
          </Form>
          {/* <img className="loginImage" src={loginImg} alt="" /> */}
        </div>
      </AuthBackground>
    </>
  );
};

export default Login;
