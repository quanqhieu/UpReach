import { Col, Row } from "antd";
import React from "react";
import HotListCardComponents from "../../../Components/Layouts/HotListCardComponent/HotListCardComponents";
import handleImgLoadingError from "../../../Components/Layouts/handleImgLoadingError/handleImgLoadingError";
import HotListCard1 from "../../../Assets/Image/Hot_list/HotListCard1.jpg";
import HotListCard2 from "../../../Assets/Image/Hot_list/HotListCard2.jpg";
import HotListCard3 from "../../../Assets/Image/Hot_list/HotListCard3.jpg";
import HotListCard4 from "../../../Assets/Image/Hot_list/HotListCard4.jpg";
import "./CardHotList.css";

const CardHotList = () => {
  return (
    <div className="hotListLayout">
      <div className="hotListContent">
        <p className="hotListTitle font-Volkhov">Hot Influencer Lists</p>
        <p className="hotListTitle">View more</p>
      </div>

      <div className="hotListCards">
        <Row gutter={445}>
          <Col span={1}>
            <HotListCardComponents
              className="hotListCard"
              image={
                <img
                  src={HotListCard1}
                  alt="hotListCard"
                  style={{
                    width: "370px",
                    height: "380px",
                    objectFit: "cover",
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}
                />
              }
              name={"Giang Ơi"}
              topics={"Instagram, Youtube"}
            />
          </Col>
          <Col span={1}>
            <HotListCardComponents
              className="hotListCard"
              image={
                <img
                  src={HotListCard2}
                  alt="hotListCard"
                  style={{
                    width: "370px",
                    height: "380px",
                    objectFit: "cover",
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}
                />
              }
              name={"Chao Đây"}
              topics={"Facebook, Instagram, Tiktok"}
            />
          </Col>
          <Col span={1}>
            <HotListCardComponents
              className="hotListCard"
              image={
                <img
                  src={HotListCard3}
                  alt="hotListCard"
                  style={{
                    width: "370px",
                    height: "380px",
                    objectFit: "cover",
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}
                />
              }
              name={"Vũ Dino"}
              topics={"Facebook, Tiktok"}
            />
          </Col>
          <Col span={1}>
            <HotListCardComponents
              className="hotListCard"
              image={
                <img
                  src={HotListCard4}
                  alt="hotListCard"
                  style={{
                    width: "370px",
                    height: "380px",
                    objectFit: "cover",
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}
                />
              }
              name={"Linh Ngọc Đàm"}
              topics={"Instagram ,Youtube, Tiktok"}
            />
          </Col>
        </Row>
      </div>
      <handleImgLoadingError />
    </div>
  );
};

export default CardHotList;
