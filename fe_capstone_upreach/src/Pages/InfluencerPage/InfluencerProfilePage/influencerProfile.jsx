import { Avatar, Button, Col, Collapse, Form, Input, Row,Modal,Upload } from "antd";
import FormItem from "antd/es/form/FormItem";
import React, { useEffect, useRef, useState } from "react";
import {
  DownCircleOutlined,
  EditOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import "./influencerProfile.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from "react-router-dom";
import ApiInfluencer from "../../../Api/ApiInfluencer";
const InfluencerProfile = () => {
  const [isModalOpenUpdateEmail, setIsModalOpenUpdateEmail] = useState(false);
  const [isSubModel, setSubModel] = useState(false);
  const [isModalOpenChangePassword, setIsModalOpenChangePassword] =useState(false);
  const [message, setMessage] = useState()
  const [status, setStatus] = useState()
  const navigate = useNavigate(); 
  
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState()

  const [formValues, setFormValues] = useState({
    image: '',
    influDetail: null
  });

 

  useEffect(() =>{
    const data = localStorage.getItem('user-draw-storage');
    const formDataJson = JSON.parse(data);
    setFormValues(prevDetails => ({ ...prevDetails, influDetail: formDataJson }));
    if(status ==='True'){
      navigate('/homepage')
    }
  },[status])
  console.log(formValues)
  const onFinish = () => {
    console.log(formValues)
    FetchDataProfile(formValues)
  }

  const FetchDataProfile = async (data) => {
    try {
      const response = await ApiInfluencer.updateAvatarInfluencer(data);
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
  const updateImageValue = (newValue) => {
    setFormValues({
      ...formValues, // Sao chép tất cả các giá trị hiện tại của formValues
      image: newValue // Thay đổi giá trị của image thành newValue
    });
  };

  const handleCancel = () => setPreviewOpen(true);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    updateImageValue(newFileList)
  }
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8
        }}
        className= ""
      >
        Upload
      </div>
    </div>
  );

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnFocusLoss: true,
    draggable: true,
    theme: "dark",
  }

  const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

  return (
    <div >
      <div className="basicInformation" col>
        <p className= "header-word">Update Avatar </p>
      </div>
      <Form
        className="client-form"
        onFinish= {onFinish}
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
          <Form.Item>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
            maxCount={1}
          >
            {uploadButton}
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
          </Form.Item>
        </div>
        <div></div>
        <div className="bnt_button">
          <FormItem>
            <Button className="btn_update" htmlType="update">
              Update
            </Button>
          </FormItem>
        </div>
      </Form>
    </div>
    
  );
};
export default InfluencerProfile;