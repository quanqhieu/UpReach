import { Card, Col, Row } from 'antd'
import React from 'react'
import ImageCard_1 from "../../../src/Assets/Image/Hot_list/ImageCard_1.svg"
import ImageCard_2 from "../../../src/Assets/Image/Hot_list/ImageCard_2.svg"
import ImageCard_3 from "../../../src/Assets/Image/Hot_list/ImageCard_3.svg"
import ImageCard_4 from "../../../src/Assets/Image/Hot_list/ImageCard_4.svg"
import Meta from 'antd/es/card/Meta'



function Card_hot_list() {
  return (
    <Card
      key="1"
      hoverable
      style={{
        width: 300,
      }}
      cover={<img alt='Img1' src={ImageCard_1} />
      }
    >
      <Meta title="Giang Ơi"
        description="Tiktoker, Reviewer, Fashion" />
    </Card>
  )
}

export default Card_hot_list
