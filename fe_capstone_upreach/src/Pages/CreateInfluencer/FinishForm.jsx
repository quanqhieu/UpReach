import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

const FinishForm = () => {
  return (
    <>
      <div id="content">
        <div className="form-information">
          <div className="title-finish-information">
            <h3>Successful !</h3>
          </div>
          <div className="form-information-form">
            <h5>We have received your information.</h5>
            <h5>Please wait for us to confirm your account within 72 hours.</h5>
            <h5>After verifying your information is correct.</h5>
            <h5>
              We will email you that you have access to the UpReach system.
            </h5>
          </div>
          <Button
            className="upgrade-card-btn"
            type="primary"
            shape="round"
            size="large"
          >
            <Link to="/login">Come back</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default FinishForm;
