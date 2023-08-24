import React, { useState } from "react";
import "./InfluReport.css";
import { Tabs } from "antd";
import ReportSocial from "./ReportSocial/ReportSocial";
import ReportAudience from "./ReportAudience/ReportAudience";
import ReportPost from "./ReportPost/ReportPost";

const InfluReport = ({ influInfo, roleClient }) => {
  const items = [
    {
      title: "SOCIAL",
      children: <ReportSocial influInfo={influInfo} roleClient={roleClient} />,
    },
    {
      title: "AUDIENCE",
      children: (
        <ReportAudience
          influInfo={influInfo?.influencerId}
          roleClient={roleClient}
          influInfoEmail={influInfo?.influencerEmail}
        />
      ),
    },
    {
      title: "JOB",
      children: (
        <ReportPost
          influInfo={influInfo?.influencerId}
          roleClient={roleClient}
          influInfoEmail={influInfo?.influencerEmail}
        />
      ),
    },
  ];

  return (
    <>
      <div className="influ-report-layout">
        <Tabs
          defaultActiveKey="1"
          type="card"
          size={"large"}
          items={items?.map((item, i) => {
            return {
              label: item?.title,
              key: i,
              children: item?.children,
            };
          })}
        />
      </div>
    </>
  );
};
export default InfluReport;
