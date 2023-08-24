import React, { useState, useEffect } from "react";
import "./ReportPost.css";
import { Spin } from "antd";
import JobItem from "./JobItem/ApproveJobItem";

const ReportPost = ({ influInfo, dataReportVersion, isLoading }) => {
  const [jobItems, setJobItems] = useState([]);
  // console.log(dataReportVersion.dataJob);

  useEffect(() => {
    setJobItems(dataReportVersion?.dataJob);
  }, [dataReportVersion?.dataJob]);

  return (
    <div className="report-post-layout">
      <Spin tip="Loading" size="large" spinning={isLoading}>
        {jobItems
          ?.filter((item) => item?.jobId !== null && item?.isPublish !== false)
          .map((item, index) => (
            <div key={index}>
              <JobItem jobInfo={item} />
            </div>
          ))}
      </Spin>
    </div>
  );
};

export default ReportPost;
