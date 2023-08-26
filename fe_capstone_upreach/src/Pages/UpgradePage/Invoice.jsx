import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ApiListClient from '../../Api/ApiListClient';


const  Invoices = ({formPlan}) => {
    const [formValues, setFormValues] = useState({
        clientDetail: null,
        planPackageDetail : formPlan.planPackageDetail
      });
    const [invoiceData, setInvoiceData] = useState({
        Package : formPlan.planPackageDetail.describe,
        date: '2023-08-26',
        totalAmount: 1000.0,
        items: [
            { name: formPlan.planPackageDetail.Tag,  price: formPlan.planPackageDetail.cost },
        ]
    });

    const FetchDataPayment = async (data) =>{
        try {
            const respone = await ApiListClient.updateAfterScanQR(data)
            console.log(respone)
            return respone
        } catch (error) {
            console.log(error);
        }
    }
    console.log(formValues)
    useEffect(() =>{
        const newClient = localStorage.getItem('user-draw-storage');
        const formDataNewClientJson = JSON.parse(newClient);
        setFormValues(prevDetails => ({ ...prevDetails, clientDetail: formDataNewClientJson.state.user }));
    },[])
    const onClickToUpdatePlanPackage = () =>{
        
        FetchDataPayment(formValues)
    }
    return (
        <div className="App">
        <h1>Invoice</h1>
        <p>Invoice Plan Package: {formPlan.planPackageDetail.describe}</p>
        <p>Date: {invoiceData.date}</p>
        <h2>Plan Package</h2>
        <ul>
            {invoiceData.items.map((item, index) => (
            <li key={index}>
                {item.name} - Price: {item.price}
            </li>
            ))}
        </ul>
        <p>Total Amount: {formPlan.planPackageDetail.cost}</p>
        <Link to={formPlan?.infoPaySuccess?.data?.order_url}>
            <button onClick={onClickToUpdatePlanPackage} type="button" className="btn btn-info">Button</button>
        </Link>
        </div>
    );
}

export default Invoices;