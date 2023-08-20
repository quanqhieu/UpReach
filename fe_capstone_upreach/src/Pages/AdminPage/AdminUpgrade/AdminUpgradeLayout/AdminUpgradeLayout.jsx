import React from "react";
import "./AdminUpgradeLayout.css";
import {
  Table,
  Popconfirm,
  Form,
  Input,
  Typography,
  message,
  Spin,
} from "antd";

import {
  DeleteOutlined,
  UserDeleteOutlined,
  EditOutlined,
  LockOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
import axios from "axios";

const AdminUpgradeLayout = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const [editingId, setEditingId] = React.useState("");
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [force, setForce] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [listPackage, setListPackage] = React.useState([
    {
      fullName: "Le Quang Hieu",
      brand: "UpReach",
      package: "Starter",
      date: "20/8/2023",
      report: "19",
      search: "198",
    },
    {
      fullName: "Nguyen Dac Thien",
      brand: "FPT University",
      package: "Free",
      date: "21/8/2023",
      report: "9",
      search: "99",
    },
    {
      fullName: "Truong Quang Dat",
      brand: "FPT Software",
      package: "Free",
      date: "21/8/2023",
      report: "10",
      search: "100",
    },
    {
      fullName: "Nguyen Hoang Anh",
      brand: "Enovou",
      package: "Free",
      date: "21/8/2023",
      report: "9",
      search: "99",
    },
    {
      fullName: "Nguyen Quang Huy",
      brand: "Weport",
      package: "Business",
      date: "21/8/2023",
      report: "500",
      search: "999",
    },
    {
      fullName: "Nguyen Nhat Minh",
      brand: "Weport",
      package: "Gold",
      date: "17/8/2023",
      report: "999",
      search: "3000",
    },
    {
      fullName: "Nguyen Trung Chien",
      brand: "FPT Software",
      package: "Gold",
      date: "18/8/2023",
      report: "1000",
      search: "2989",
    },
    {
      fullName: "Nguyen Trung Chien",
      brand: "FPT Software",
      package: "Gold",
      date: "18/8/2023",
      report: "1000",
      search: "2989",
    },
    {
      fullName: "Nguyen Trung Chien",
      brand: "FPT Software",
      package: "Gold",
      date: "18/8/2023",
      report: "1000",
      search: "2989",
    },
    {
      fullName: "Nguyen Trung Chien",
      brand: "FPT Software",
      package: "Gold",
      date: "18/8/2023",
      report: "1000",
      search: "2989",
    },
    {
      fullName: "Nguyen Trung Chien",
      brand: "FPT Software",
      package: "Gold",
      date: "18/8/2023",
      report: "1000",
      search: "2989",
    },
    {
      fullName: "Nguyen Trung Chien",
      brand: "FPT Software",
      package: "Gold",
      date: "18/8/2023",
      report: "1000",
      search: "2989",
    },
    {
      fullName: "Nguyen Trung Chien",
      brand: "FPT Software",
      package: "Gold",
      date: "18/8/2023",
      report: "1000",
      search: "2989",
    },
  ]);

  const isEditing = (record) => {
    return record?.clientId === editingId;
  };

  const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    const inputNode =
      inputType === "number" ? (
        <Input type="number" maxLength={11} style={{ width: "160px" }} />
      ) : (
        <Input />
      );

    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
            }}
            rules={[
              {
                required: true,
                // message: `Error!`,
                message: `Input ${title}!`,
              },
            ]}
          >
            {inputNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  const edit = (record) => {
    form.setFieldsValue({
      fullName: "",
      brand: "",
      package: "",
      date: "",
      report: "",
      search: "",
      ...record,
    });
    setEditingId(record?.clientId);
  };

  const cancel = () => {
    setOpenConfirm(false);
  };
  const ok = () => {
    setEditingId("");
    setOpenConfirm(false);
  };

  const tags = [
    {
      title: "Full Name",
      dataIndex: "fullName",
      width: "19%",
      editable: true,
    },
    {
      title: "Brand Name",
      dataIndex: "brand",
      width: "15%",
      editable: true,
    },
    {
      title: "Package",
      dataIndex: "package",
      width: "10%",
      editable: true,
    },
    {
      title: "Date upgrade",
      dataIndex: "date",
      width: "15%",
      editable: true,
    },
    {
      title: "Report remaining",
      dataIndex: "report",
      width: "15%",
      editable: true,
    },
    {
      title: "Search remaining",
      dataIndex: "search",
      width: "15%",
      editable: true,
    },
    {
      title: <EditOutlined />,
      dataIndex: "edit",
      width: "11%",
      render: (_, record) => {
        const editable = isEditing(record);

        return editable ? (
          <span
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography.Link
              // onClick={() => handleSave(record?.clientId)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm
              open={openConfirm}
              title="Sure to cancel?"
              onCancel={cancel}
              onConfirm={ok}
            >
              <p
                style={{ cursor: "pointer", paddingTop: "3px  " }}
                // onClick={async () => {
                //   if (await check()) {
                //     console.log(true);
                //     setOpenConfirm(true);
                //   } else {
                //     setEditingId("");
                //   }
                // }}
              >
                Cancel
              </p>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingId !== ""}
            // onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      },
    },
  ];

  const mergedTags = tags?.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => {
        return {
          record,
          inputType: col.dataIndex === "report" || "search" ? "number" : "text",
          dataIndex: col.dataIndex,
          title: col.title,
          editing: isEditing(record),
        };
      },
    };
  });

  return (
    <>
      {contextHolder}
      <div className="admin-upgrade-layout">
        <div className="admin-upgrade-table">
          <Form form={form} component={false}>
            {/* <Spin tip="Loading" size="large" spinning={isLoading}> */}
            <Table
              components={{
                body: {
                  cell: EditableCell,
                },
              }}
              columns={mergedTags}
              dataSource={listPackage}
              rowClassName="editable-row"
              pagination={{
                onChange: cancel,
                pageSize: 12,
              }}
              size="large"
            />
            {/* </Spin> */}
          </Form>
        </div>
      </div>
    </>
  );
};
export default AdminUpgradeLayout;
