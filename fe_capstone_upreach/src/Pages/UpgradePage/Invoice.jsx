import React, { useState } from 'react';


const  Invoices = () => {
    const [invoiceData, setInvoiceData] = useState({
        invoiceNumber: 'INV-001',
        date: '2023-08-26',
        totalAmount: 1000.0,
        items: [
        { name: 'Item 1', quantity: 2, price: 300.0 },
        { name: 'Item 2', quantity: 1, price: 400.0 },
        { name: 'Item 3', quantity: 3, price: 100.0 }
        ]
    });

    return (
        <div className="App">
        <h1>Invoice</h1>
        <p>Invoice Number: {invoiceData.invoiceNumber}</p>
        <p>Date: {invoiceData.date}</p>
        <h2>Items:</h2>
        <ul>
            {invoiceData.items.map((item, index) => (
            <li key={index}>
                {item.name} - Quantity: {item.quantity} - Price: {item.price}
            </li>
            ))}
        </ul>
        <p>Total Amount: {invoiceData.totalAmount}</p>
        <button onClick={() => alert('Invoice Printed')}>Pay Order</button>
        </div>
    );
}

export default Invoices;