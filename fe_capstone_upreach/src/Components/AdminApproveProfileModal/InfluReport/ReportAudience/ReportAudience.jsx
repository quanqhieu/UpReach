import "./ReportAudience.css";
import { Row, Col } from "antd";
import { Line, Pie, Bar } from "@ant-design/plots";
import React from "react";
const ReportAudience = (influInfo) => {
  const [audienceFollower, setAudienceFollower] = React.useState(
    influInfo.influInfo.influInfo.audienceFollower
  );
  const [audienceGender, setAudienceGender] = React.useState(
    influInfo.influInfo.influInfo.audienceGender
  );
  const [audienceAge, setAudienceAge] = React.useState(
    influInfo.influInfo.influInfo.audienceAge
  );
  const [audienceLocation, setAudienceLocation] = React.useState(
    influInfo.influInfo.influInfo.audienceLocation
  );

  const configFollower = {
    data: audienceFollower,
    xField: "AudienceFollowerMonth",
    yField: "Quantity",
  };
  const configGender = {
    data: audienceGender,
    angleField: "Quantity",
    colorField: "Gender",
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

  const configAge = {
    data: audienceAge,
    xField: "Quantity",
    yField: "AgeRange",
    meta: {
      type: {
        alias: "Age",
      },
      sales: {
        alias: "People",
      },
    },
    minBarWidth: 16,
    maxBarWidth: 16,
  };

  const configLocation = {
    data: audienceLocation,
    xField: "Quantity",
    yField: "AudienceLocation",
    meta: {
      type: {
        alias: "Location",
      },
      sales: {
        alias: "People",
      },
    },
    minBarWidth: 16,
    maxBarWidth: 16,
  };

  return (
    <div className="report-audience-layout">
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
  );
};

export default ReportAudience;
