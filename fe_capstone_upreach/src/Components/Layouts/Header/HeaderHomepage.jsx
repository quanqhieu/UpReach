import React from 'react'
import { Space, Typography } from "antd"
// import { ReactComponent as Logo } from "../../../Assets/Image/LogoLogo.svg"
import Buttons from '../../UI/Buttons'
import './HeaderHomepage.css'

const HeaderHomepage = () => {
    return (
        <div className='HeaderHomepage'>
            <Space>
                <div className='Menu'>
                    <Space align='center'>
                        <Typography.Text>Home</Typography.Text>
                        <Typography.Text>Explore</Typography.Text>
                        <Typography.Text>How it work</Typography.Text>
                        <Typography.Text>Blog</Typography.Text>
                    </Space>
                </div>
                <div className='SingUp'>
                    <Space>
                        <Buttons text="login" type="link" />
                        <Buttons text="Join as brand" shape="round" type="primary" />
                    </Space>
                </div>
            </Space>
        </div>
    )
}

export default HeaderHomepage
