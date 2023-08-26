import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UpgradeCard.css";
import { ReactComponent as Facebook } from "../../../Assets/Icon/Facebook.svg";
import { ReactComponent as Instagram } from "../../../Assets/Icon/Instagram.svg";
import { ReactComponent as Youtube } from "../../../Assets/Icon/Youtube.svg";
import { ReactComponent as Tiktok } from "../../../Assets/Icon/Tiktok.svg";
import { ReactComponent as Question } from "../../../Assets/Icon/QuestionIcon.svg";
import { Button } from "antd";
import ApiListClient from "../../../Api/ApiListClient";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from "react";
const UpgradeCard = ({ upgradeCards , setIsInvoice,setFormPlan }) => {

  const [message, setMessage] = useState()
  const [status, setStatus] = useState()
  // const [isInvoice, setIsInvoice] = useState(true);

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnFocusLoss: true,
    draggable: true,
    theme: "dark",
  }
  const fetchDataForPayment = async (data) =>{
    // console.log(data)
    try {
      const response = await ApiListClient.zaloPayment(data);
      if(response.status === "False"){
        toast.error(response.message, toastOptions)
        setStatus(response.status)
        return ;
      }
      toast.success(response.message, toastOptions)
      setStatus(response.status)
      setFormPlan(prevDetails => ({ ...prevDetails, infoPaySuccess: response }));
      console.log(response)
      return response;
    } catch (error) {
      setMessage(error)
      console.log(error);
    }
  }
// console.log(formPlan)
  const handleUpgradeClick = (selectedPackage) => {
    console.log(selectedPackage); // In ra dữ liệu của gói nâng cấp khi người dùng nhấp vào nút mua gói
    setFormPlan(prevDetails => ({ ...prevDetails, planPackageDetail: selectedPackage }));
    fetchDataForPayment(selectedPackage)
    setIsInvoice(false)
  };

  return (
    <> <div className="upgrade-card-bg">
    <div className="upgrade-card-header">
      <div className="upgrade-card-tag-socials">
        <div className="upgrade-card-tag">{upgradeCards?.tag}</div>
        <div className="upgrade-card-socials">
          <div className="upgrade-card-social">
            <Facebook />
          </div>
          <div className="upgrade-card-social">
            <Instagram />
          </div>
          <div className="upgrade-card-social">
            <Youtube />
          </div>
          <div className="upgrade-card-social">
            <Tiktok />
          </div>
        </div>
      </div>
      <div className="upgrade-card-cost">
        <p style={{ fontSize: "26px", fontWeight: "600" }}>
          {upgradeCards?.cost}
        </p>
        <p style={{ fontSize: "14px", fontWeight: "600" }}>VND/month</p>
      </div>
      {/* <Link to="/confirmplan"> */}
      <Link >
        <Button
          className="upgrade-card-btn"
          type="primary"
          shape="round"
          size="large"
          onClick={() => handleUpgradeClick(upgradeCards)} 
        >
          {upgradeCards?.btnTag}
        </Button>
      </Link>
    </div>
    <div className="upgrade-card-content">
      <p
        className="upgrade-card-content-title"
        style={{ fontWeight: "600", fontSize: "16px" }}
      >
        INCLUDED FEATURES:
      </p>
      <div className="upgrade-card-content-sub-title">
        <div className="upgrade-card-content-line-item">
          <div className="line-item-check-title">
            <img src={upgradeCards?.sub1[0]} alt="" />
            <span style={{ marginLeft: "5px" }}>
              {upgradeCards?.sub1[1]}
            </span>
          </div>
          <Question />
        </div>

        <div className="upgrade-card-content-line-item">
          <div className="line-item-check-title">
            <img src={upgradeCards?.sub2[0]} alt="" />
            <span style={{ marginLeft: "5px" }}>
              {upgradeCards?.sub2[1]}
            </span>
          </div>
          <Question />
        </div>

        <div className="upgrade-card-content-line-item">
          <div className="line-item-check-title">
            <img src={upgradeCards?.sub3[0]} alt="" />
            <span style={{ marginLeft: "5px" }}>
              {upgradeCards?.sub3[1]}
            </span>
          </div>
          <Question />
        </div>

        <div className="upgrade-card-content-line-item">
          <div className="line-item-check-title">
            <img src={upgradeCards?.sub4[0]} alt="" />
            <span style={{ marginLeft: "5px" }}>
              {upgradeCards?.sub4[1]}
            </span>
          </div>
          <Question />
        </div>

        <div className="upgrade-card-content-line-item">
          <div className="line-item-check-title">
            <img src={upgradeCards?.sub5[0]} alt="" />
            <span style={{ marginLeft: "5px" }}>
              {upgradeCards?.sub5[1]}
            </span>
          </div>
          <Question />
        </div>

        <div className="upgrade-card-content-line-item">
          <div className="line-item-check-title">
            <img src={upgradeCards?.sub6[0]} alt="" />
            <span style={{ marginLeft: "5px" }}>
              {upgradeCards?.sub6[1]}
            </span>
          </div>
          <Question />
        </div>

        <div className="upgrade-card-content-line-item">
          <div className="line-item-check-title">
            <img src={upgradeCards?.sub7[0]} alt="" />
            <span style={{ marginLeft: "5px" }}>
              {upgradeCards?.sub7[1]}
            </span>
          </div>
          <Question />
        </div>

        <div className="upgrade-card-content-line-item">
          <div className="line-item-check-title">
            <img src={upgradeCards?.sub8[0]} alt="" />
            <span style={{ marginLeft: "5px" }}>
              {upgradeCards?.sub8[1]}
            </span>
          </div>
          <Question />
        </div>

        <div className="upgrade-card-content-line-item">
          <div className="line-item-check-title">
            <img src={upgradeCards?.sub9[0]} alt="" />
            <span style={{ marginLeft: "5px" }}>
              {upgradeCards?.sub9[1]}
            </span>
          </div>
          <Question />
        </div>

        <div className="upgrade-card-content-line-item">
          <div className="line-item-check-title">
            <img src={upgradeCards?.sub10[0]} alt="" />
            <span style={{ marginLeft: "5px" }}>
              {upgradeCards?.sub10[1]}
            </span>
          </div>
          <Question />
        </div>

        <div className="upgrade-card-content-line-item">
          <div className="line-item-check-title">
            <img src={upgradeCards?.sub11[0]} alt="" />
            <span style={{ marginLeft: "5px" }}>
              {upgradeCards?.sub11[1]}
            </span>
          </div>
          <Question />
        </div>
        <ToastContainer />
      </div>
    </div>
  </div>
     
    </>
  );
};
export default UpgradeCard;
