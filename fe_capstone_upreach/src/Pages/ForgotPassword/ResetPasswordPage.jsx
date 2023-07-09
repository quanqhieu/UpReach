import React from "react";
import { Button, Form, Input } from "antd";
import "./ForgotPasswordPage.css";

const ResetPasswordPage = () => {
  return (
    <>
      <div className="pwd-background">
        <div className="form-custom-bg">
          <div className="form-holder reset-form" style={{ display: "block" }}>
            <h2 className="form-title">Reset Password </h2>
            <Form className="form">
              <Input
                name="new-pwd"
                className="input"
                type="password"
                placeholder=" Enter New Password"
              ></Input>
              <Input
                name="confirm-new-pwd"
                className="input"
                type="password"
                placeholder="Confirm New Password"
              ></Input>
              <Button className="submit btn">Reset Password</Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordPage;
