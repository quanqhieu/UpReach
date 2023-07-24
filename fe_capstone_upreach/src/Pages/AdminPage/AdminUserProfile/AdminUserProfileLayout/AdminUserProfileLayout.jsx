import React from "react";
import "./AdminUserProfileLayout.css";
import { Table, Popconfirm, Form, Input, Typography } from "antd";
import {
  DeleteOutlined,
  UserDeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";

const AdminUserProfileLayout = () => {
  const [form] = Form.useForm();
  const [editingId, setEditingId] = React.useState("");
  const [isChange, setIsChange] = React.useState(false);
  const [openConfirm, setOpenConfirm] = React.useState(false);

  const check = async () => {
    if (editingId !== "") {
      const row = await form.validateFields();

      if (
        listClient.some(
          (item) => item.id == editingId && item.name == row.name
        ) &&
        listClient.some(
          (item) => item.id == editingId && item.brand == row.brand
        ) &&
        listClient.some(
          (item) => item.id == editingId && item.email == row.email
        ) &&
        listClient.some(
          (item) => item.id == editingId && item.phone == row.phone
        ) &&
        listClient.some(
          (item) => item.id == editingId && item.location == row.location
        )
      ) {
        return false;
      } else return true;
    }
  };
  const tags = [
    {
      title: "Full Name",
      dataIndex: "name",
      width: "15%",
      editable: true,
    },
    {
      title: "Brand Name",
      dataIndex: "brand",
      width: "15%",
      editable: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "20%",
      editable: true,
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      width: "15%",
      editable: true,
    },
    {
      title: "Location",
      dataIndex: "location",
      width: "25%",
      editable: true,
    },

    {
      title: <EditOutlined />,
      dataIndex: "edit",
      width: "15%",
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
              onClick={() => handleSave(record.id)}
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
                onClick={async () => {
                  if (await check()) {
                    console.log(true);
                    setOpenConfirm(true);
                  } else {
                    setEditingId("");
                  }
                }}
              >
                Cancel
              </p>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingId !== ""}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      },
    },
    {
      title: <UserDeleteOutlined />,
      dataIndex: "delete",
      width: "5%",
      render: (_, record) =>
        listClient.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.id)}
          >
            <DeleteOutlined />
          </Popconfirm>
        ) : null,
    },
  ];

  const [listClient, setListClient] = React.useState([
    {
      id: "1",
      name: "hieu",
      brand: "H&M",
      email: "lequanghieu0701@gmail.com",
      phone: "0398357123",
      location: "Da Nang",
    },
    {
      id: "2",
      name: "minh",
      brand: "H&M",
      email: "lequanghieu0701@gmail.com",
      phone: "0398357123",
      location: "Da Nang",
    },
    {
      id: "3",
      name: "Son",
      brand: "H&M",
      email: "lequanghieu0701@gmail.com",
      phone: "0398357123",
      location: "Da Nang",
    },
    {
      id: "4",
      name: "Le Quang Hieu",
      brand: "H&M",
      email: "lequanghieu0701@gmail.com",
      phone: "0398357123",
      location: "Da Nang",
    },
  ]);

  const isEditing = (record) => {
    return record.id === editingId;
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
      name: "",
      brand: "",
      email: "",
      phone: "",
      location: "",
      ...record,
    });
    setEditingId(record.id);
  };

  const cancel = () => {
    console.log(true);
    setOpenConfirm(false);
  };
  const ok = () => {
    setEditingId("");
    setOpenConfirm(false);
  };

  const handleSave = async (id) => {
    try {
      const row = await form.validateFields();
      const newInfoClient = [...listClient];
      const index = newInfoClient.findIndex((item) => id === item.id);
      if (index > -1) {
        const item = newInfoClient[index];
        newInfoClient.splice(index, 1, {
          ...item,
          ...row,
        });
        setListClient(newInfoClient);
        setEditingId("");
      } else {
        newInfoClient.push(row);
        setListClient(newInfoClient);
        setEditingId("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const mergedTags = tags.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => {
        return {
          record,
          inputType: col.dataIndex === "phone" ? "number" : "text",
          dataIndex: col.dataIndex,
          title: col.title,
          editing: isEditing(record),
        };
      },
    };
  });

  const handleDelete = (id) => {
    const newListClient = listClient.filter((item) => item.id !== id);
    setListClient(newListClient);
  };

  return (
    <>
      <div className="admin-user-layout">
        {/* <div className="admin-user-title">
          <p>OVERVIEW</p>
        </div> */}
        <div className="admin-user-list-layout">
          <div className="admin-user-table">
            <Form form={form} component={false}>
              <Table
                components={{
                  body: {
                    cell: EditableCell,
                  },
                }}
                columns={mergedTags}
                dataSource={listClient}
                rowClassName="editable-row"
                pagination={{
                  onChange: cancel,
                  pageSize: 12,
                }}
                size="large"
              />
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminUserProfileLayout;
