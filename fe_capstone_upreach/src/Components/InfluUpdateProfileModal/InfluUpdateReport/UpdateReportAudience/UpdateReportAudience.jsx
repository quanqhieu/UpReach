import "./UpdateReportAudience.css";
import { Row, Col } from "antd";
import { Line, Pie, Bar } from "@ant-design/plots";
import React from "react";
import { ExcelRenderer } from "react-excel-renderer";
import axios from "axios";

const UpdateReportAudience = ({ influInfo, setPreviewChart, setIsChange }) => {
  const [dataFollower, setDataFollower] = React.useState([]);
  const [dataGender, setDataGender] = React.useState([]);
  const [dataAge, setDataAge] = React.useState([]);
  const [dataLocation, setDataLocation] = React.useState([]);

  const configFollower = {
    data: dataFollower,
    xField: "date",
    yField: "value",
  };

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

  const configAge = {
    data: dataAge,
    xField: "value",
    yField: "age",
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
    data: dataLocation,
    xField: "value",
    yField: "location",
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
  function convertExcelDateToNormalDate(excelDate) {
    let baseDate = new Date(1900, 0, 1);
    let milliseconds = excelDate * 86400000;
    let resultDate = new Date(baseDate.getTime() + milliseconds);

    let month = resultDate.getMonth() + 1;
    // let day = resultDate.getDate() - 2;
    let year = resultDate.getFullYear();

    // let formattedDate = month + "/" + day + "/" + year;
    let formattedDate = month + "/" + year;

    return formattedDate;
  }

  const fileHandler = (event, chartName) => {
    if (event.target.files[0]) {
      let fileObj = event.target.files[0];
      ExcelRenderer(fileObj, (err, resp) => {
        if (err) {
          console.log(err);
        } else {
          if (chartName === "follower") {
            const rows = resp.rows.slice(2, 8);
            const data = rows.map((row) => {
              return {
                date: convertExcelDateToNormalDate(row[1]),
                // date: row[1],
                value: row[2],
              };
            });
            setDataFollower(data);
            setPreviewChart((prevChart) => ({
              ...prevChart,
              dataFollower: data,
            }));
          } else if (chartName === "gender") {
            const rows = resp.rows.slice(2, 4);
            const data = rows.map((row) => {
              return {
                sex: row[1],
                value: row[2],
              };
            });
            setDataGender(data);
            setPreviewChart((prevChart) => ({
              ...prevChart,
              dataGender: data,
            }));
          } else if (chartName === "age") {
            const rows = resp.rows.slice(2, 6);
            const data = rows.map((row) => {
              return {
                age: row[1],
                value: row[2],
              };
            });
            setDataAge(data);
            setPreviewChart((prevChart) => ({
              ...prevChart,
              dataAge: data,
            }));
          } else if (chartName === "location") {
            const rows = resp.rows.slice(2, 8);
            const data = rows.map((row) => {
              return {
                location: row[1],
                value: row[2],
              };
            });
            setDataLocation(data);
            setPreviewChart((prevChart) => ({
              ...prevChart,
              dataLocation: data,
            }));
          }
        }
      });
    }
  };

  // React.useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/api/influ/get-audience-influencer", {
  //       params: {
  //         email: influInfo.influencerEmail,
  //       },
  //     })
  //     .then((response) => {
  //       const audienceFollowerData = response.data.data.selectedFollowers;
  //       const followerList = audienceFollowerData
  //         .map((data) => {
  //           if (data?.AudienceFollowerMonth && data?.Quantity) {
  //             return {
  //               date: data.AudienceFollowerMonth,
  //               value: data.Quantity,
  //             };
  //           }
  //           return null;
  //         })
  //         .filter((item) => item !== null)
  //         .sort((a, b) => {
  //           const [aMonth, aYear] = a.date.split("/");
  //           const [bMonth, bYear] = b.date.split("/");

  //           if (parseInt(aYear, 10) !== parseInt(bYear, 10)) {
  //             return parseInt(aYear, 10) - parseInt(bYear, 10);
  //           }
  //           return parseInt(aMonth, 10) - parseInt(bMonth, 10);
  //         });

  //       setDataFollower(followerList);

  //       // console.log(response.data.data.selectedGenders);
  //       const audienceGenderData = response.data.data.selectedGenders;
  //       const genderList = audienceGenderData
  //         .map((data) => {
  //           if (data?.Gender && data?.Quantity) {
  //             return {
  //               sex: data.Gender,
  //               value: data.Quantity,
  //             };
  //           }
  //           return null;
  //         })
  //         .filter((item) => item !== null);
  //       setDataGender(genderList);

  //       // console.log(response.data.data.selectedAges);
  //       const audienceAgeData = response.data.data.selectedAges;
  //       const ageList = audienceAgeData
  //         .map((data) => {
  //           if (data?.AgeRange && data?.Quantity && data?.AudienceAge_ID) {
  //             return {
  //               age: data.AgeRange,
  //               value: data.Quantity,
  //               ageId: data.AudienceAge_ID,
  //             };
  //           }
  //           return null;
  //         })
  //         .filter((item) => item !== null)
  //         .sort((a, b) => {
  //           return a.ageId.localeCompare(b.ageId);
  //         });
  //       setDataAge(ageList);

  //       // console.log(response.data.data.selectedLocations);
  //       const audienceLocationData = response.data.data.selectedLocations;
  //       const locationList = audienceLocationData
  //         .map((data) => {
  //           if (data?.AudienceLocation && data?.Quantity) {
  //             return {
  //               location: data.AudienceLocation,
  //               value: data.Quantity,
  //             };
  //           }
  //           return null;
  //         })
  //         .filter((item) => item !== null);
  //       setDataLocation(locationList);
  //     })
  //     .catch((error) => {
  //       console.error("Error while fetching Audience information:", error);
  //     });
  // }, []);

  return (
    <div className="update-report-audience-layout">
      <Row gutter={[16, 16]}>
        <Col style={{ position: "relative" }} span={12}>
          <input
            type="file"
            id="import-follower"
            className="import-excel-follower"
            onChange={(e) => fileHandler(e, "follower")}
          />
          <label className="file-label" htmlFor="import-follower">
            Import data
          </label>
          <div className="report-audience-bg audience-follower">
            <div className="audience-follower-chart">
              Followers
              <Line {...configFollower} className="follower-chart" />
            </div>
          </div>
        </Col>
        <Col style={{ position: "relative" }} span={12}>
          <input
            type="file"
            id="import-gender"
            className="import-excel-follower"
            onChange={(e) => fileHandler(e, "gender")}
          />
          <label className="file-label" htmlFor="import-gender">
            Import data
          </label>
          <div className="report-audience-bg audience-gender">
            <div className="audience-gender-chart">
              Gender
              <Pie {...configGender} className="gender-chart" />
            </div>
          </div>
        </Col>
        <Col style={{ position: "relative" }} span={12}>
          <input
            type="file"
            id="import-age"
            className="import-excel-follower"
            onChange={(e) => fileHandler(e, "age")}
          />
          <label className="file-label" htmlFor="import-age">
            Import data
          </label>
          <div className="report-audience-bg audience-age">
            <div className="audience-age-chart">
              Age
              <Bar {...configAge} className="age-chart" />
            </div>
          </div>
        </Col>
        <Col style={{ position: "relative" }} span={12}>
          <input
            type="file"
            id="import-location"
            className="import-excel-follower"
            onChange={(e) => fileHandler(e, "location")}
          />
          <label className="file-label" htmlFor="import-location">
            Import data
          </label>
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

export default React.memo(UpdateReportAudience);
