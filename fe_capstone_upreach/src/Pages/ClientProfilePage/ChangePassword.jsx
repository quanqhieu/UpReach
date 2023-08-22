import { Button, Form, Input, Modal } from "antd";
import FormItem from "antd/es/form/FormItem";
import React from "react";
import { useEffect } from "react";
import ApiListClient from "../../Api/ApiListClient";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
const ChangePassword = ({
  isModalOpenChangePassword,
  setIsModalOpenChangePassword,
}) => {
  const handleCancel = () => {
    setIsModalOpenChangePassword(false);
  };

  const [status, setStatus] = useState()
  const [message, setMessage] = useState()

  
  const [formValues, setFormValues] = useState({
      oldPassword: '',
      newPassword: '',
      clientDetail: null,
  });
  useEffect(() =>{
    const oldClient = localStorage.getItem('user-draw-storage');
    const formDataOldClientJson = JSON.parse(oldClient);
    const data = formDataOldClientJson.state.user
    setFormValues(prevDetails => ({ ...prevDetails, clientDetail: data }));
   
  },[status]);

  useEffect(() =>{
    if(status === "True"){
      console.log("Change Password ! ")
      FetchDataUpdatePassword(formValues)
    }
  },[status])
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
      
    });
  };

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnFocusLoss: true,
    draggable: true,
    theme: "dark",
  }
  const onFinishChangePassword = async () =>{
    console.log(formValues)
    await FetchDataCheckPassword(formValues)
  }
  

  const FetchDataCheckPassword = async (data) => {
    try {
      const response = await ApiListClient.checkPasswordClient(data);
      if(response.status === "False"){
        toast.error(response.message, toastOptions)
        setStatus(response.status)
        console.log(response)
        return response;
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

  const FetchDataUpdatePassword = async (data) =>{
    try {
      const response = await ApiListClient.updatePasswordClient(data);
      if(response.status === "False"){
        toast.error(response.message, toastOptions)
        setStatus(response.status)
        console.log(response)
        return response;
      }
      toast.success(response.message, toastOptions)
      setStatus(response.status)
      console.log(response)
      return response;
    } catch (error) {
      setMessage(error)
      console.log(error);
    }
  }

  return (
    <>
      <div className="ant-modal-content">
        <Modal
          open={isModalOpenChangePassword}
          footer={null}
          centered
          onCancel={handleCancel}
        >
          <h2>Change password</h2>
          <p>Change the password that you use to log in to Upsearch</p>
          <Form
            onFinish={onFinishChangePassword}
            className="change_password"
            name="validateOnly"
            layout="vertical"
            autoComplete="off"
          >
            <div>
            <Form.Item name="oldpassword">
                <Input
                  name = "oldPassword"
                  type="password"
                  className="btn_input"
                  style={{ border: "1px solid #9B9A9A" }}
                  placeholder="Enter Old Password"
                  onChange={handleInputChange}
                />
              </Form.Item>
              <Form.Item name="newPassword"
              
              rules={[
                { required: true, message: "Please input your password!" },
                { min: 8, message: "Enter as least 8 characters" },
              ]}
              >
                <Input
                  name="newPassword"
                  type="password"
                  onChange={handleInputChange}
                  className="btn_input"
                  style={{ border: "1px solid #9B9A9A" }}
                  placeholder="Enter New Password"
                />
              </Form.Item>
              <Form.Item name="confirmNewPassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your confirm password!",
                  },
                  { min: 8, message: "Enter as least 8 characters" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("newPassword") === value) {
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
                <Input
                  className="btn_input"
                  type="password"
                  style={{ border: "1px solid #9B9A9A" }}
                  placeholder="Confirm New Password"
                />
              </Form.Item>
            </div>
            <div className="btn-button">
              <FormItem>
                <Button onClick={onFinishChangePassword} className="btn_verification">
                  Change Password
                </Button>
              </FormItem>
            </div>
          </Form>
        </Modal>
      </div>
    </>
  );
};

export default ChangePassword;
