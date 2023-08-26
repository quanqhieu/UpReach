import React, { useEffect } from 'react';
import { useLocation, useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ApiListClient from '../../Api/ApiListClient';
import { useState } from 'react';

const ConfirmPayment =() => {
    const location = useLocation();
    const queryParams = Object.fromEntries(new URLSearchParams(location.search));
    const navigate = useNavigate();
    const [isData,setIsData] = useState()
    const [status,setStatus] = useState(false)
    const onClickHomePage = () =>{
      console.log(isData)
      FetchDataPayment(isData)
      setStatus(true)
    }

    

    const FetchDataPayment = async (data) =>{
      try {
          const respone = await ApiListClient.updateAfterScanQR(data)
          console.log(respone)
          return respone
      } catch (error) {
          console.log(error);
      }
    }

    useEffect(()=>{
      const data = localStorage.getItem("Plan-Package");
      const dataPlanPackage = JSON.parse(data);
      setIsData(dataPlanPackage)
      if(status){
        navigate('/homepage')
      }
    },[status])

    useEffect(() =>{

    })
    
  return (
    <div>
      <div>
        <h1>Your Profile Update Success</h1>
        <button onClick={onClickHomePage} >Home Page</button>
      </div>
    </div>
  );
}

export default ConfirmPayment;