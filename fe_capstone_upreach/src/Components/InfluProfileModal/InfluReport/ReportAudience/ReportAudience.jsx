import "./ReportAudience.css";
import { Row, Col, Button } from "antd";
import { Line, Pie, Bar } from "@ant-design/plots";
import ApiAudienceAndJobInfluencer from "../../../../Api/ApiAudienceAndJobInfluencer";
import React, { useState, useEffect } from "react";
import "../../../../CSS/Theme.css";
import { Link } from "react-router-dom";
import { LockFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const ReportAudience = ({ influInfo, roleClient }) => {
  const [data, setData] = useState();
  const navigate = useNavigate();
  //====================== Get Data Back End Of Audience Chart ======================
  const fetchDataForChart = async (IdInflu) => {
    try {
      const response = await ApiAudienceAndJobInfluencer.getDataForChart(
        IdInflu
      );
      setData(response);
      console.log(response);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  //=================================================================================
  // console.log(data);
  useEffect(() => {
    fetchDataForChart(influInfo);
  }, []);
  const dataFollower =
    data?.data[0]?.dataFollower === undefined
      ? []
      : data?.data[0]?.dataFollower;
  const configFollower = {
    data: dataFollower,
    xField: "monthFollow",
    yField: "value",
  };

  const dataGender =
    data?.data[0]?.dataGender === undefined ||
    data?.data[0]?.dataGender?.sex === null ||
    data?.data[0]?.dataGender?.value === null
      ? []
      : data?.data[0]?.dataGender;

  const configGender = {
    data: dataGender,
    angleField: "value",
    colorField: "sex",
    label: {
      type: "inner",
      offset: "-35%",
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 13,
        textAlign: "center",
      },
    },
  };

  const dataAge =
    data?.data[0]?.dataAge === undefined ? [] : data?.data[0]?.dataAge;

  const configAge = {
    data: dataAge,
    xField: "value",
    yField: "type",
    meta: {
      type: {
        alias: "类别",
      },
      sales: {
        alias: "People",
      },
    },
    minBarWidth: 16,
    maxBarWidth: 16,
  };

  const dataLocation =
    data?.data[0]?.dataLocation === undefined
      ? []
      : data?.data[0]?.dataLocation;
  const configLocation = {
    data: dataLocation,
    xField: "value",
    yField: "type",
    meta: {
      type: {
        alias: "类别",
      },
      sales: {
        alias: "People",
      },
    },
    minBarWidth: 16,
    maxBarWidth: 16,
  };

  return (
    <>
      <div className={`report-audience-layout`}>
        {roleClient !== "Free" ? (
          ""
        ) : (
          <div className="upgrade-btn">
            <Button
              type="primary"
              shape="round"
              icon={<LockFilled />}
              size={"large"}
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#000",
              }}
              onClick={() => {
                navigate("/upgrade");
              }}
            >
              Upgrade
            </Button>
          </div>
        )}
        <div className={roleClient === "Free" ? "blur-data-to-payment" : ""}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <div className="report-audience-bg audience-follower">
                <div className="audience-follower-chart">
                  Followers
                  <Line {...configFollower} className="follower-chart" />
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className="report-audience-bg audience-gender">
                <div className="audience-gender-chart">
                  Gender
                  <Pie {...configGender} className="gender-chart" />
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className="report-audience-bg audience-age">
                <div className="audience-age-chart">
                  Age
                  <Bar {...configAge} className="age-chart" />
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className="report-audience-bg audience-location">
                <div className="audience-location-chart">
                  Location
                  <Bar {...configLocation} className="location-chart" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ReportAudience;
