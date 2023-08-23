import React,{ useEffect, useRef, useState } from "react";
import { Button, Form, Input } from "antd";
import "./ForgotPasswordPage.css";
import FormItem from "antd/es/form/FormItem";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";
import ApiUser from "../../Api/ApiUser";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
const ResetPasswordPage = () => {
  
  const [message, setMessage] = useState()
  const [status, setStatus] = useState()
  const navigate = useNavigate(); 
  const [formValues, setFormValues] = useState({
    newPassword: '',
    confirmNewPassword: ''
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnFocusLoss: true,
    draggable: true,
    theme: "dark",
  }
  useEffect(()=>{
  if(status ==='True'){
    navigate('/login')
  } 
},[status])

  const FetchUpdatePassword = async (data) => {
    try {
      console.log(123123)
      const response = await ApiUser.ChangePassword(data);
      if(response.status === "False"){
        toast.error(response.message, toastOptions)
        setStatus(response.status)
        return ;
      }
      toast.success(response.message, toastOptions)
      setStatus(response.status)
      console.log(response)
      return response;
    } catch (error) {
      setMessage(error)
      console.log(error);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };
  const onFinishChangePassword = (value)=>{
    console.log(123123)
    FetchUpdatePassword(formValues)
  }
  
  return (
    <>
      <div className="pwd-background">
        <div className="form-custom-bg">
          <div className="form-holder reset-form" style={{ display: "block" }}>
            <h2 className="form-title">Reset Password </h2>
            <Form className="form" >
              <FormItem
                rules={[
                  { required: true, message: "Please input your password!" },
                  { min: 8, message: "Enter as least 8 characters" },
                ]}
                name="new-pwd"
              >
                <Input.Password
                  style={{
                    width: "500px",
                    height: "50px",
                  }}
                  onChange={handleInputChange}
                  name="newPassword"
                  className="input"
                  type="password"
                  placeholder=" Enter New Password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                ></Input.Password>
              </FormItem>
              <FormItem
                name="confirm-new-pwd"
                rules={[
                  {
                    required: true,
                    message: "Please input your confirm password!",
                  },
                  { min: 8, message: "Enter as least 8 characters" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("new-pwd") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The re-password that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  style={{
                    width: "500px",
                    height: "50px",
                  }}
                  onChange={handleInputChange}
                  name="confirmNewPassword"
                  className="input"
                  type="password"
                  placeholder="Confirm New Password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                ></Input.Password>
              </FormItem>
              <Link >
                <Button
                  style={{
                    width: "500px",
                    height: "50px",
                  }}
                  className="submit btn"
                  onClick={onFinishChangePassword}
                >
                  Reset Password
                </Button>
              </Link>
              <ToastContainer />
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordPage;
