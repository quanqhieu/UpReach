import {
  CheckCircleOutlined,
  GlobalOutlined,
  InfoCircleOutlined,
  PictureOutlined,
  TagOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Steps } from "antd";
import React, { useState,useEffect } from "react";
import InformationForm from "./InformationForm";
import "./CreateInfluencerPage.css";
import OverviewForm from "./OverviewForm";
import ContentForm from "./ContentForm";
import SocialForm from "./SocialForm";
import FinishForm from "./FinishForm";
import ApiUser from "../../Api/ApiUser";
import ApiListInfluecer from "../../Api/ApiListInfluecer";
import FailForm from "./FailForm";

const CreatInfluencerProfilePage = () => {
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);
  const [informationDetails, setInformationDetails] = useState(null);
  const [overviewDetails, setOverviewDetails] = useState(null);
  const [contentDetails, setContentFormDetails] = useState([null]);
  const [socialDetails, setSocialFormDetails] = useState(null);
  const [message, setMessage] = useState();
  
  const [allDetails, setAllDetails] = useState({
    informationDetails: null,
    overviewDetails: null,
    contentDetails: null,
    socialDetails: null,
  });
  
  const onFinishInformationForm = (values) => {
    console.log('Information Form')
    console.log(values);
    // setInformationDetails(values);
    setAllDetails(prevDetails => ({ ...prevDetails, informationDetails: values }));
    setCurrent(1);
  };

  const onFinishOverviewForm = (values) => {
    console.log('Overview Form')
    // setOverviewDetails(values); // vẫn chưa lưu value OverviewDetails
    setAllDetails(prevDetails => ({ ...prevDetails, overviewDetails: values }));
    setCurrent(2);
  };

  const onFinishContentForm = (values) => {
    console.log('Content Form')
    setAllDetails(prevDetails => ({ ...prevDetails, contentDetails: contentDetails }));
    setCurrent(3); // khi bấm continue chuyển qua tab 3
  };

  const onFinishSocialForm = (values) => {
    console.log('Social Form')
    console.log(values);
    // setSocialFormDetails(values);
    setAllDetails(prevDetails => ({ ...prevDetails, socialDetails: values }));
    setCurrent(4);
  };

  const areAllStepsCompleted = () => {
    return (
      allDetails.informationDetails !== null &&
      allDetails.overviewDetails !== null &&
      allDetails.contentDetails !== null &&
      allDetails.socialDetails !== null
    );
  };

  const handleFinishAllForms = async () => {
    try {
      if(areAllStepsCompleted()){
        const result = await ApiListInfluecer.addNewInfluencer(allDetails);
        console.log(allDetails)
        console.log(result)
        if (result) {
          return true
        } else {
          return false
        }
      }
      
    } catch (error) {
      console.log(error);
    }
  };
  const isAllFormsFinished = handleFinishAllForms();
  
  const forms = [
    <InformationForm
      onFinish={onFinishInformationForm}
      initialValues={informationDetails}
    />,
    <OverviewForm
      onFinish={onFinishOverviewForm}
      initialValues={overviewDetails}
    />,
    <ContentForm
      onFinish={onFinishContentForm} // chuyển tabs
      setContentFormDetails={setContentFormDetails}
      contentDetails={contentDetails}
    />,
    <SocialForm 
      onFinish={onFinishSocialForm}
      initialValues={socialDetails}
    />,
    <>{isAllFormsFinished ? <FinishForm />: <FailForm/>}</>,
  ];
  const isStepDisabled = (stepNumber) => {
    if (stepNumber === 0) {
      return false;
    }
    if (stepNumber === 1) {
      return informationDetails === null;
    }
    if (stepNumber === 2) {
      return informationDetails === null || overviewDetails === null;
    }
    if (stepNumber === 3) {
      return (
        informationDetails === null ||
        overviewDetails === null ||
        contentDetails === null
      );
    }
    if (stepNumber === 4) {
      return (
        informationDetails === null ||
        overviewDetails === null ||
        contentDetails === null ||
        socialDetails === null
      );
    }
  };

  
  return (
    <>
      <div className="create-page">
        <div className="step-create-page">
          <Steps onChange={setCurrent} current={current}>
            <Steps.Step
              disabled={isStepDisabled(0)}
              title="Information"
              icon={<UserOutlined/>}
            />
            <Steps.Step
              disabled={isStepDisabled(1)}
              title="Overview"
              icon={<InfoCircleOutlined />}
            />
            <Steps.Step
              disabled={isStepDisabled(2)}
              title="Content Topic"
              icon={<TagOutlined/>}
            />
            <Steps.Step
              disabled={isStepDisabled(3)}
              title="Social"
              icon={<GlobalOutlined/>}
            />
            <Steps.Step
              disabled={isStepDisabled(4)}
              title="Finish"
              icon={<CheckCircleOutlined />}
            />
          </Steps>
          
          {forms[current] }
        </div>
      </div>
    </>
  );
};

export default CreatInfluencerProfilePage;
