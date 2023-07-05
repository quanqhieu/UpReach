import "./OTPForm.css";
import { Input, Button } from "antd";
const OTPForm = ({ onCancel, email }) => {
  return (
    <>
      <div className="cover-otp-form">
        <div className="header-otp">
          <p className="title-otp">Enter security code</p>
        </div>
        <div className="body-otp">
          <div className="notation-otp">
            <p>
              Please check your emails for a message with your code. Your code
              is 6 numbers long.
            </p>
          </div>
          <div className="content-otp">
            <Input
              style={{ height: "40px", width: "300px" }}
              placeholder="Enter OTP code"
            />
            <div className="email-block-otp">
              <p>We sent your code to:</p>
              <p>{email}</p>
            </div>
          </div>
        </div>
        <div className="footer-otp">
          <div className="content-footer-otp">
            <p className="resend-otp">Didn’t get a code?</p>
            <div className="btn-footer-otp">
              <Button
                onClick={() => {
                  onCancel();
                }}
                style={{ height: "35px" }}
              >
                Cancel
              </Button>
              <Button style={{ height: "35px", width: "110px" }} type="primary">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OTPForm;
