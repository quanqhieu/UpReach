import React from 'react'
import { Space, Typography } from "antd"
import { ReactComponent as Logo } from "../../../Assets/Image/LogoLogo.svg"
import './FooterHome.css'
import { FooterCompany, FooterContact, FooterMore } from '../../Constant/ConstFooter'


function FooterHome() {

    function ListOfFooter({ dtaFooter, nameFooter }) {
        return (
            <Space direction="vertical">
                <Typography.Text
                    style={{ color: "#FFFFFF", fontFamily: "Poppins" }}
                >
                    {nameFooter}
                </Typography.Text>
                {dtaFooter.map((value, index) =>
                    <Typography.Text
                        key={index}
                        style={{ color: "#FFFFFF", fontFamily: "Poppins" }}
                        onClick={() => alert("aaa")}
                    >
                        {value}
                    </Typography.Text>
                )}
            </Space>
        )
    }


    return (
        <div className='FooterHomePage'>
            <Space>
                <Space direction="vertical">
                    <Logo />
                    <Typography.Text
                        style={{ color: "#FFFFFF", fontFamily: "Poppins" }}
                    >
                        Book your Influencer in minute, get full Control for much longer.
                    </Typography.Text>
                </Space>
                <ListOfFooter dtaFooter={FooterCompany} nameFooter="Company" />
                <ListOfFooter dtaFooter={FooterContact} nameFooter="Contact" />
                <ListOfFooter dtaFooter={FooterMore} nameFooter="More" />
            </Space>
        </div >
    )
}

export default FooterHome
