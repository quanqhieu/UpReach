import { Input } from "antd";
import React from "react";

const UserSearch = ({ onSearch }) => {
  const handleSearch = (value) => {
    onSearch(value);
  };

  return (
    <Input.Search
      style={{ height: "45px" }}
      placeholder="Search influe booked"
      onSearch={handleSearch}
    />
  );
};

export default UserSearch;
