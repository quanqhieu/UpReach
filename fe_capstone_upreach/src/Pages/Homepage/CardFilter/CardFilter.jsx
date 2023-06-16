import "./CardFilter.css";
import { Checkbox } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
const CardFilter = () => {
  const genderOptions = [
    { label: "All genders", value: "All genders" },
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];
  const ageOptions = [
    { label: "Age 18 - 21", value: "Age 18 - 21" },
    { label: "Age 21 - 29", value: "Age 21 - 29" },
    { label: "Over 30", value: "Over 30" },
  ];
  const socialOptions = [
    { label: "All socials", value: "All socials" },
    { label: "Instagram", value: "Instagram" },
    { label: "TikTok", value: "TikTok" },
    { label: "Facebook", value: "Facebook" },
  ];
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  return (
    <div className="cardFilter">
      <div className="row">
        <div className="col-4 ">
          <div className="filterTitle">Gender</div>
          <div className="filterOptions">
            <Checkbox.Group options={genderOptions} onChange={onChange} />
          </div>
        </div>
        <div className="col-4 ">
          <div className="filterTitle">Age</div>
          <div className="filterOptions">
            <Checkbox.Group options={ageOptions} onChange={onChange} />
          </div>
        </div>
        <div className="col-4 ">
          <div className="filterTitle">Social</div>
          <div className="filterOptions">
            <Checkbox.Group options={socialOptions} onChange={onChange} />
          </div>
        </div>
      </div>
      <div className="filterBtn">
        <Button
          style={{ height: "35px", width: "150px" }}
          icon={<SearchOutlined />}
        >
          Filter
        </Button>
      </div>
    </div>
  );
};
export default CardFilter;
