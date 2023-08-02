import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import { ReactComponent as IconGoogle } from "../../../src/Assets/Icon/google-icon.svg";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import AuthBackground from "../../Components/Layouts/AuthBackground/AuthBackground";
import ApiUser from "../../Api/ApiUser"




function ValidateButton({
  isValidInput
}) {
  return (
    <>
  {isValidInput? <Link className="signUpBtnText" to="/verify-register">
  
</Link>: <Button
    style={{
      width: "100%",
      height: "50px",
    }}
    type="primary"
    htmlType="submit"
    className="signUpBtn"
    
  >
    Sign Up
  </Button>}
  </>
  );
}

const SignUp = () => {
  const navigate = useNavigate()
  const ROLE_CLIENT = "2"
  const [message, setMessage] = useState({
    MesName: '',
    MesEmail: '',
    MesPassword: '',
    MesConfirmPass: ''
  })
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPass: ''
  })

  const handleSubmit = () => {
    console.log('VODAY', form)
    if (form.name === "" || form.name === undefined) {
      return;
    }
    if (form.email === "" || form.email === undefined) {
      return;
    }
    if (form.password === "" || form.password === undefined) {
      return;
    }
    if (form.confirmPass === "" || form.confirmPass === undefined || form.confirmPass !== form.password) {
      return;
    }
    else{
      form.role = ROLE_CLIENT
      localStorage.setItem('formData', JSON.stringify(form));
      navigate("/verify-register")
    }
  };

  const onChangeInput = (value) => {
    setForm({...form, [value.target.name] : value.target.value})
  };
  
  return (
    <AuthBackground>
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
          >
            <Input
              className= "signUpTypeBtn heightSignUpBtn"
              placeholder="Enter full name"
              name="name"
              onChange={onChangeInput}
            />
          </Form.Item>
          
          <div className="signUpSubTitle">
            <p className="signUpSubTitleContent">Email address </p>
            <p className="signUpSubChar">*</p>
          </div>
          
          <Form.Item
            name="email"
          >
            <Input
              className="signUpTypeBtn heightSignUpBtn"
              placeholder="Youremail@example.com"
              name="email"
              onChange={onChangeInput}
            />
          </Form.Item>
          <div className="signUpSubTitle">
            <p className="signUpSubTitleContent">Password</p>
            <p className="signUpSubChar">*</p>
          </div>
          <Form.Item
            name="password"
          >
            <Input.Password
              type="password"
              className="signUpTypeBtn heightSignUpBtn"
              placeholder="Enter your password at least 8 characters"
              name="password"
              onChange={onChangeInput}
            />
          </Form.Item>
          <div className="signUpSubTitle">
            <p className="signUpSubTitleContent">Confirm password </p>
            <p className="signUpSubChar">*</p>
          </div>
          <Form.Item
            name="confirmPassword"
          >
            <Input
              type="password"
              name="confirmPass"
              onChange={onChangeInput}
              className="signUpTypeBtn heightSignUpBtn"
              placeholder="Enter confirm password"
            />
          </Form.Item>
          <div className="row">
            <div className="col-6 p-0">
                <Button
                  style={{
                    width: "98%",
                    height: "50px",
                  }}
                  type="primary"
                  htmlType="submit"
                  className="signUpBtn"
                >
                  Join as Brand
                </Button>
            </div>
            <div className="col-6 p-0">
                <Button
                  style={{
                    width: "98%",
                    height: "50px",
                  }}
                  type="primary"
                  htmlType="submit"
                  className="signUpBtn"
                >
                  Join as Influencer
                </Button>
            </div>
          </div>
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
