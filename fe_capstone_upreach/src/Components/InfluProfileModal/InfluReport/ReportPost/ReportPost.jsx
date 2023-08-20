import React, { useState, useEffect } from "react";
import "./ReportPost.css";
import JobItem from "./JobItem/JobItem";
import ApiAudienceAndJobInfluencer from "../../../../Api/ApiAudienceAndJobInfluencer";

const ReportPost = ({ influInfo }) => {
  const [data, setData] = useState();
  //====================== Get Data Back End Of Audience Chart ======================
  const fetchDataForChart = async (IdInflu) => {
    try {
      const response = await ApiAudienceAndJobInfluencer.getDataForChart(
        IdInflu
      );

      setData(response);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  //=================================================================================
  useEffect(() => {
    fetchDataForChart(influInfo);
  }, [influInfo]);

  return (
    <>
      <div className="report-post-layout">
        {data?.data[0]?.dataJob === undefined ? (
          <></>
        ) : (
          data?.data[0]?.dataJob.map((item) =>

            item.jobId != null && item.isPublish === true ? (
              <JobItem data={item} />
            ) : (
              <></>
            )
          )
        )}
      </div>
    </>
  );
};

export default ReportPost;
