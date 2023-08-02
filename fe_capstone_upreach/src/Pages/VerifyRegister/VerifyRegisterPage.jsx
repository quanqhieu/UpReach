import React, { useEffect, useState } from "react";
import { Button, Form, Input, InputNumber } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./VerifyRegisterPage.css";
import ApiUser from "../../Api/ApiUser"
const VerifyRegisterPage = () => {

  const navigate = useNavigate(); 
  const [message, setMessage] = useState()
  const [inputValue, setInputValue] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPass: ''
  });

  useEffect(  () => {    
    const FetchRegisterUser = async (data) => {
      try {
        const response = await ApiUser.registerUser(data);
        console.log(response)
        return response;
      } catch (error) {
        setMessage(error)
        console.log(error) ; 
      }
    };

    const data = localStorage.getItem('formData');
    if(!data){
      navigate("/sign-up")
    }
    const formDataJson = JSON.parse(data);
    const result = FetchRegisterUser(formDataJson);
    setFormData(formDataJson)
  }, []);

  const confirmUser = async (data) =>{
    try{
      const response = await ApiUser.conFirmUser(data);
      console.log(response)
      return response
    }catch(error){
      setMessage(error)
      throw error;
    }
  }
  
  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleContinueButtonClick = () => {
    formData.otp = ''+inputValue
    confirmUser(formData)
  };
  

  return (
    <>
      <div className="verify-background">
        <div className="verify-custom-bg">
          <div className="form-holder reset-form" style={{ display: "block" }}>
            <h2 className="form-title">Verify your email </h2>
            <div className="sub-title">
              <p>
                We sent an email to immthien407@gmail.com. Check your inbox and
                enter the 6-digit code to verify your email.
              </p>
            </div>
            <Form className="form" >
              <Form.Item
                name="name"
              >
                <InputNumber
                  style={{
                    width: "500px",
                    height: "50px",
                  }}
                  className="input"
                  placeholder="Enter 6-Digit Code"
                  value={inputValue}
                  onChange={handleInputChange}
                />
              </Form.Item>
              <Button
                  style={{
                    width: "500px",
                    height: "50px",
                  }}
                  className="submit btn"
                  onClick={handleContinueButtonClick}
                >
                  Continue
              </Button>
              
              <div className="login-forgot">I didn't receive an email</div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyRegisterPage;
