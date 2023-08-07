import "./ClientBookingModal.css";
import React from "react";
import { Button, Input, DatePicker } from "antd";
const { TextArea } = Input;
const { RangePicker } = DatePicker;
const ClientBookingModal = ({ setIsChange }) => {
  const [describes, setDescribes] = React.useState("");
  const [dates, setDates] = React.useState(null);
  const [value, setValue] = React.useState(null);
  console.log(dates);
  const onOpenChange = (open) => {
    if (open) {
      setDates([null, null]);
    } else {
      setDates(null);
    }
  };
  const handleSend = () => {
    console.log("mo ta", describes);
    console.log("start date", value[0]);
    console.log("end date", value[1]);
  };
  return (
    <>
      <div className="client-booking-modal">
        <div className="booking-modal-title">Detail Booking</div>
        <div className="booking-modal-content">
          <div className="content-header">
            Services
            <div className="content-line">
              <p className="line-title">Platform</p>
              <p className="line-content"></p>
            </div>
            <div className="content-line">
              <p className="line-title">Job Name</p>
              <p className="line-content">Quang cao tu lanh</p>
            </div>
          </div>
          <div className="content-body">
            Customer
            <div className="content-line">
              <p className="line-title">Full Name</p>
              <p className="line-content"></p>
            </div>
            <div className="content-line">
              <p className="line-title">Brand Name</p>
              <p className="line-content"></p>
            </div>
            <div className="content-line">
              <p className="line-title">Content</p>
              <p className="line-content"></p>
            </div>
            <div className="content-line">
              <p className="line-title">Quantities</p>
              <p className="line-content"></p>
            </div>
            <div className="content-line">
              <p className="line-title">Link</p>
              <p className="line-content">facebook.com</p>
            </div>
            <div className="content-line">
              <p className="line-title">Cost Estimate From</p>
              <p className="line-content"></p>
            </div>
            <div className="content-line">
              <p className="line-title">Cost Estimate To</p>
              <p className="line-content"></p>
            </div>
            <div className="content-line">
              <p className="line-title">Describes</p>
              <TextArea
                onChange={(e) => setDescribes(e.target.value)}
                value={describes}
                // onBlur={handleSubmit}
                // onPressEnter={handleSubmit}
                // status={isError ? "error" : ""}
                autoFocus
                rows={4}
                placeholder="Describes your booking detail"
              />
            </div>
            <div className="content-line">
              <p className="line-title">Start date - End date</p>

              <RangePicker
                bordered={false}
                value={dates || value}
                onCalendarChange={(val) => {
                  setDates(val);
                }}
                onChange={(val) => {
                  setValue(val);
                }}
                onOpenChange={onOpenChange}
                changeOnBlur
              />
            </div>
          </div>
          <div className="content-footer">
            <Button
              className="mail-box-btn"
              type="primary"
              onClick={handleSend()}
              // htmlType="submit"
            >
              Send detail booking
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientBookingModal;
