import React, { useState } from "react";
import "./VersionInfluReport.css";
import { Tabs } from "antd";
import ReportSocial from "./ReportSocial/ReportSocial";
import ReportAudience from "./ReportAudience/ReportAudience";
import ReportPost from "./ReportPost/ReportPost";

const VersionInfluReport = (influInfo) => {
  const items = [
    {
      title: "SOCIAL",
      children: <ReportSocial influInfo={influInfo.influInfo} />,
    },
    {
      title: "AUDIENCE",
      children: <ReportAudience influInfo={influInfo.influInfo} />,
    },
    { title: "JOBS", children: <ReportPost influInfo={influInfo.influInfo} /> },
  ];

  return (
    <>
      <div className="influ-report-layout">
        <Tabs
          defaultActiveKey="1"
          type="card"
          size={"large"}
          items={items.map((item, i) => {
            return {
              label: item.title,
              key: i,
              children: item.children,
            };
          })}
        />
      </div>
    </>
  );
};
export default VersionInfluReport;
