import React, { useState } from "react";
import "./InfluUpdateReport.css";
import { Tabs } from "antd";
import UpdateReportSocial from "./UpdateReportSocial/UpdateReportSocial";
import UpdateReportAudience from "./UpdateReportAudience/UpdateReportAudience";
import UpdateReportJobs from "./UpdateReportJobs/UpdateReportJobs";

const InfluUpdateReport = ({
  setIsChange,
  influInfo,
  setInfluInfo,
  bookingInfo,
  setBookingInfo,
  idJobsRemove,
  setIdJobsRemove,
  chartInfo,
  setChartInfo,
}) => {
  const items = [
    {
      title: "SOCIAL",
      children: (
        <UpdateReportSocial
          setIsChange={setIsChange}
          influInfo={influInfo}
          setInfluInfo={setInfluInfo}
        />
      ),
    },
    {
      title: "AUDIENCE",
      children: (
        <UpdateReportAudience
          previewChart={chartInfo}
          setPreviewChart={setChartInfo}
        />
      ),
    },
    {
      title: "JOBS",
      children: (
        <UpdateReportJobs
          bookingInfo={bookingInfo}
          setBookingInfo={setBookingInfo}
          idJobsRemove={idJobsRemove}
          setIdJobsRemove={setIdJobsRemove}
        />
      ),
    },
  ];

  return (
    <>
      <div className="influ-update-report-layout">
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

export default InfluUpdateReport;
