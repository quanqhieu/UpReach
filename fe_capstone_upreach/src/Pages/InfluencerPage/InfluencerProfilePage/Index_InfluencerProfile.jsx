import { Avatar, Button, Col, Collapse, Form, Input, Row,Modal,Upload, Select, InputNumber } from "antd";
import FormItem from "antd/es/form/FormItem";
import React, { useEffect, useRef, useState } from "react";
import "./influencerProfile.css";
import {
  DownCircleOutlined,
  EditOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from "react-router-dom";
import ChangePassword from "../../ClientProfilePage/ChangePassword";
import { Option } from "antd/es/mentions";

const Index_InfluencerProfile = () => {
  const [isModalOpenChangePassword, setIsModalOpenChangePassword] =useState(false);
  const navigate = useNavigate(); 

  const [fileList, setFileList] = useState()

  const [formValues, setFormValues] = useState({
    image: '',
    fullName: '',
    brandName: '',
    phoneNumber: '',
    location: '',
    emailContact: '',
    clientDetail: null,
  });
   
  function handleClickShowDialogChangePassword() {
    setIsModalOpenChangePassword(true);
  }

  const items = [
    {
      key: "1",
      label: "Advanced",
      children: (
        <>
          <div>
            <p>Change Password</p>
            <EditOutlined onClick={handleClickShowDialogChangePassword} />
            <ChangePassword
              isModalOpenChangePassword={isModalOpenChangePassword}
              setIsModalOpenChangePassword={setIsModalOpenChangePassword}
            />
          </div>
        </>
      ),
    },
  ];

  return (
    <Row style={{ marginTop: "4%" }}>
      <Col span={6}>
        <div className="basicInformation" col>
          <p>Profile Infomation</p>
        </div>
      </Col>
      <Col span={18}>
        <Row>
          <Col span={16} style={{ borderLeft: "1px solid black" }}>
            <div>
              <Form
                className="client-form"
                name="validateOnly"
                layout="vertical"
                autoComplete="off"
                labelCol={{
                  span: 4,
                }}
                wrapperCol={{
                  span: 14,
                }}
                style={{
                  maxWidth: 800,
                }}
              >
                <div>
                  {/* <Form.Item>
                  <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                  >
                    {fileList ? null : uploadButton}
                  </Upload>
                  <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                    <img
                      alt="example"
                      style={{
                        width: '100%',
                      }}
                      src={previewImage}
                    />
                  </Modal>
                  </Form.Item> */}
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Please input your Full Name!",
                      },
                    ]}
                    name="fullname"
                    label="Full Name"
                  >
                    <Input name="fullName"  style={{ border: "1px solid #9B9A9A" }} />
                  </Form.Item>
                  <Form.Item
                name="nickname"
                className="information-btn"
                rules={[
                  {
                    required: false,
                    message: "Please input your nickname!",
                  },
                ]}
              >
                <Input placeholder="Enter Your Nickname" />
              </Form.Item>
              <Form.Item
                name="location"
                className="information-btn"
                rules={[
                  {
                    required: false,
                    message: "Please select your location",
                  },
                ]}
              >
                <Select placeholder="Select Your Location">
                  <Option value="location1">TP Hồ Chí MInh</Option>
                  <Option value="location2">TP Hà Nội</Option>
                  <Option value="location3">TP Hà Nội</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="gender"
                className="information-btn"
                rules={[
                  {
                    required: false,
                    message: "Please select your gender",
                  },
                ]}
              >
                <Select placeholder="Select Your Gender">
                  <Option value="Male">Male</Option>
                  <Option value="Female">Female</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name={["age"]}
                className="information-btn"
                rules={[
                  {
                    type: "number",
                    min: 18,
                    max: 99,
                    required: false,
                    message: "Please enter your age",
                  },
                ]}
              >
                <InputNumber placeholder="Age" />
              </Form.Item>
              <Form.Item
                name="intro"
                className="information-btn"
                rules={[
                  {
                    required: false,
                    message: "Please enter your Intro",
                  },
                ]}
              >
                <Input.TextArea
                  placeholder="Enter Your Bio"
                  showCount
                  maxLength={500}
                />
              </Form.Item>
              <Form.Item
                name="typeId"
                className="information-btn"
                rules={[
                  {
                    required: false,
                    message: "Please enter your influencer type",
                  },
                ]}
              >
                <Select placeholder="Select Your Influencer Type ">
                  <Option value="IT01">Celebrity</Option>
                  <Option value="IT02">Talent</Option>
                  <Option value="IT03">Professional</Option>
                  <Option value="IT04">Citizen</Option>
                  <Option value="IT05">Community</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="relationship"
                className="information-btn"
                rules={[
                  {
                    required: false,
                    message: "Please enter your relationship",
                  },
                ]}
              >
                <Select placeholder="Select Your Relationship ">
                  <Option value="Single">Single</Option>
                  <Option value="Married">Married</Option>
                  <Option value="Single Mom">Single Mom</Option>
                  <Option value="Single Dad">Single Dad</Option>
                  <Option value="Unknown">Unknown</Option>
                </Select>
              </Form.Item>
              <div className="overview-form-contact">
                <h5>Your Contact Information</h5>
                <Form.Item
                  name="emailContact"
                  rules={[
                    {
                      required: false,
                      message: "Please input your email",
                    },
                    { type: "email", message: "Invalid email" },
                  ]}
                >
                  <Input
                    className="information-btn"
                    placeholder="Email we can contact with you!"
                  />
                </Form.Item>
                <Form.Item
                  name="phone"
                  rules={[
                    {
                      min: 10,
                      max: 10,
                      required: false,
                      message: "Please input your phone number",
                    },
                  ]}
                >
                  <Input placeholder="Phone we can contact with you!" />
                </Form.Item>
              </div>
                </div>
                <div className="bnt_button">
                  <FormItem>
                    <Button className="btn_update" htmlType="update">
                      Update
                    </Button>
                  </FormItem>
                </div>
                
              </Form>
            </div>
            <ToastContainer />
            <Collapse
              className="collapse_advanced"
              ghost
              expandIcon={({ isActive }) => {
                return (
                  <DownCircleOutlined
                    style={{ fontSize: "20px" }}
                    rotate={isActive ? 180 : 0}
                  />
                );
              }}
              expandIconPosition="right"
              style={{ width: "10%" }}
              items={items}
            />
          </Col>
        </Row>
      </Col>
    </Row>
    
  );
};

export default Index_InfluencerProfile;