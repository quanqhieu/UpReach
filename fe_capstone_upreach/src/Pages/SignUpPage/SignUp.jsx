import React from "react";
import { Button, Form, Input } from "antd";
import { ReactComponent as IconGoogle } from "../../../src/Assets/Icon/google-icon.svg";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import AuthBackground from "../../Components/Layouts/AuthBackground/AuthBackground";
import OTPForm from "../../Components/OTPForm/OTPForm";
import { Modal } from "antd";

const SignUp = () => {
  const [isOpenConfirm, setIsOpenConfirm] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const handleSubmit = (data) => {
    console.log(data);
    setIsOpenConfirm(true);
    setEmail(data.email);
  };

  return (
    <AuthBackground>
      <Modal
        className="custom-modal"
        centered
        open={isOpenConfirm}
        footer={null}
        onCancel={() => setIsOpenConfirm(false)}
        width={600}
        height={500}
        bodyStyle={{ borderRadius: "30px" }}
      >
        <OTPForm email={email} onCancel={() => setIsOpenConfirm(false)} />
      </Modal>
      <div className="signUpLayout">
        <Form
          name="signUp"
          className="signUpForm"
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
        >
          <p className="signUpTitle">Create your account</p>
          <Button type="primary" htmlType="submit" className="signUpGoogle">
            <div className="GoogleIcon">{<IconGoogle />}</div>
            <p style={{ fontWeight: "600" }}>Sign up with Google</p>
          </Button>
          <div className="signUpBorders">
            <div className="signUpBorder"></div>
            <p style={{ padding: "0 15px" }}>or</p>
            <div className="signUpBorder"></div>
          </div>
          <div className="signUpSubTitle">
            <p className="signUpSubTitleContent">Full Name </p>
            <p className="signUpSubChar">*</p>
          </div>
          <Form.Item
            name="name"
            rules={[
              { required: true, message: "Please input your Full Name!" },
            ]}
          >
            <Input
              className="signUpTypeBtn heightSignUpBtn"
              placeholder="Enter full name"
            />
          </Form.Item>
          <div className="signUpSubTitle">
            <p className="signUpSubTitleContent">Email address </p>
            <p className="signUpSubChar">*</p>
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
              className="signUpTypeBtn heightSignUpBtn"
              placeholder="Youremail@example.com"
            />
          </Form.Item>
          <div className="signUpSubTitle">
            <p className="signUpSubTitleContent">Password</p>
            <p className="signUpSubChar">*</p>
          </div>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              { min: 8, message: "Enter as least 8 characters" },
            ]}
          >
            <Input.Password
              type="password"
              className="signUpTypeBtn heightSignUpBtn"
              placeholder="Enter your password at least 8 characters"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          <div className="signUpSubTitle">
            <p className="signUpSubTitleContent">Confirm password </p>
            <p className="signUpSubChar">*</p>
          </div>
          <Form.Item
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: "Please input your confirm password!",
              },
              { min: 8, message: "Enter as least 8 characters" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The re-password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              type="password"
              className="signUpTypeBtn heightSignUpBtn"
              placeholder="Enter confirm password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>

          <Button type="primary" htmlType="submit" className="signUpBtn">
            <span className="signUpBtnText">Sign Up</span>
          </Button>
          <div className="signUpToLogin">
            <p>Already have an account? </p>
            <div className="loginLink">
              <Link to="/login">Login</Link>
            </div>
          </div>
        </Form>
      </div>
    </AuthBackground>
  );
};
export default SignUp;
