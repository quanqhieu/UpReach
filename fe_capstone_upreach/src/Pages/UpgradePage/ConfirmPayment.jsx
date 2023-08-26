import React, { useEffect } from 'react';
import { useLocation, useHistory } from "react-router-dom";
import ApiListClient from '../../Api/ApiListClient';

const ConfirmPayment =() => {
    const location = useLocation();
    const queryParams = Object.fromEntries(new URLSearchParams(location.search));

    const FetchDataFromCheckStatusPayment = async (data) =>{
        try {
            const respone = await ApiListClient.statusPaymentCheck(data)
            console.log(respone)
            return respone
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() =>{
        if(queryParams){
            FetchDataFromCheckStatusPayment(queryParams)
        }
    },[queryParams])
  return (
    <div>
      <div>
        <h1>Hello, this is a div with an h1 inside!</h1>
        <div>
            {/* Hiển thị các giá trị query parameters */}
            <p>Amount: {queryParams.amount}</p>
            <p>App ID: {queryParams.appid}</p>
            <p>App Transaction ID: {queryParams.apptransid}</p>
            <p>Bank Code: {queryParams.bankcode}</p>
            <p>Checksum: {queryParams.checksum}</p>
            <p>Discount Amount: {queryParams.discountamount}</p>
            <p>PMCID: {queryParams.pmcid}</p>
            <p>Status: {queryParams.status}</p>
        </div>
        <button >Home Page</button>
      </div>
      
    </div>
  );
}

export default ConfirmPayment;