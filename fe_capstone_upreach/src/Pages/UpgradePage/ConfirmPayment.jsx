import React, { useEffect } from 'react';
import { useLocation, useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ApiListClient from '../../Api/ApiListClient';

const ConfirmPayment =() => {
    const location = useLocation();
    const queryParams = Object.fromEntries(new URLSearchParams(location.search));
    const navigate = useNavigate();
    const onClickHomePage = () =>{
      navigate('/homepage')
    }
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