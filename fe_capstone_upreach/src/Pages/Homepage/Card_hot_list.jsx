import { Card, Col, Row } from 'antd'
import React from 'react'
import ImageCard_1 from "../../../src/Assets/Image/Hot_list/ImageCard_1.svg"
import ImageCard_2 from "../../../src/Assets/Image/Hot_list/ImageCard_2.svg"
import ImageCard_3  from "../../../src/Assets/Image/Hot_list/ImageCard_3.svg"
import ImageCard_4  from "../../../src/Assets/Image/Hot_list/ImageCard_4.svg"
function Card_hot_list() {
  return (
    <div>
      <Row gutter={24}>
    <Col span={6}>
      <Card 
      key="1"
      hoverable
      style={{
        width: 240,
      }}
      cover={<img alt='Img1' src={ImageCard_1} />
      }
    >
        Card content
        Card content
      </Card>
    </Col>
    <Col span={6}>
      <Card 
      key="2"
      hoverable
      style={{
        width: 240,
      }}
      cover={<img alt='Img2' src={ImageCard_2}/>}
    >
        Card content
        Card content
      </Card>
    </Col>
    <Col span={6}>
    <Card 
      hoverable
      style={{
        width: 240,
      }}
      cover={<img alt='Img3' src={ImageCard_3}/>}
    >
        Card content
        Card content
      </Card>
    </Col>
    <Col span={6}>
    <Card 
      hoverable
      style={{
        width: 240,
      }}
      cover={<img alt='Img4' src={ImageCard_4}/>}
    >
        Card content
        Card content
      </Card>
    </Col>
  </Row>
    </div>
  )
}

export default Card_hot_list
