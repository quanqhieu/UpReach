import React from "react";
import "./AdminInfluencerLayout.css";

import { Table, Popconfirm, Form, Input, Typography } from "antd";
import {
  DeleteOutlined,
  UserDeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";

const AdminInfluencerLayout = () => {
  const [form] = Form.useForm();
  const [editingId, setEditingId] = React.useState("");
  const [isChange, setIsChange] = React.useState(false);
  const [openConfirm, setOpenConfirm] = React.useState(false);

  const tags = [
    {
      title: "Full Name",
      dataIndex: "name",
      width: "14%",
      editable: true,
    },
    {
      title: "Age",
      dataIndex: "age",
      width: "5%",
      editable: true,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      width: "6%",
      editable: true,
    },
    {
      title: "Relationship",
      dataIndex: "relationship",
      width: "8%",
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
      width: "10%",
      editable: true,
    },
    {
      title: "Address",
      dataIndex: "address",
      width: "20%",
      editable: true,
    },

    {
      title: <EditOutlined />,
      dataIndex: "edit",
      width: "12%",
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
                    // console.log(true);
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
        listInflu.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.id)}
          >
            <DeleteOutlined />
          </Popconfirm>
        ) : null,
    },
  ];

  const [listInflu, setListInflu] = React.useState([
    {
      id: "1",
      name: "hieu",
      age: 22,
      gender: "Male",
      relationship: "Single",
      email: "lequanghieu0701@gmail.com",
      phone: "0398357123",
      address: "Da Nang",
    },
    {
      id: "2",
      name: "Le Quang Hieu",
      age: 22,
      gender: "Male",
      relationship: "Single",
      email: "lequanghieu0701@gmail.com",
      phone: "0398357123",
      address: "Quang Binh",
    },
    {
      id: "3",
      name: "hieudepzai",
      age: 22,
      gender: "Male",
      relationship: "Single",
      email: "lequanghieu0701@gmail.com",
      phone: "0398357123",
      address: "Hoi An",
    },
    {
      id: "4",
      name: "hieu",
      age: 22,
      gender: "Male",
      relationship: "Single",
      email: "lequanghieu0701@gmail.com",
      phone: "0398357123",
      address: "Da Nang",
    },
    {
      id: "5",
      name: "hieu",
      age: 22,
      gender: "Male",
      relationship: "Single",
      email: "lequanghieu0701@gmail.com",
      phone: "0398357123",
      address: "Da Nang",
    },
  ]);

  const check = async () => {
    if (editingId !== "") {
      const row = await form.validateFields();

      if (
        listInflu.some(
          (item) => item.id == editingId && item.name == row.name
        ) &&
        listInflu.some((item) => item.id == editingId && item.age == row.age) &&
        listInflu.some(
          (item) => item.id == editingId && item.gender == row.gender
        ) &&
        listInflu.some(
          (item) =>
            item.id == editingId && item.relationship == row.relationship
        ) &&
        listInflu.some(
          (item) => item.id == editingId && item.email == row.email
        ) &&
        listInflu.some(
          (item) => item.id == editingId && item.phone == row.phone
        ) &&
        listInflu.some(
          (item) => item.id == editingId && item.address == row.address
        )
      ) {
        return false;
      } else return true;
    }
  };

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
        <Input type="number" maxLength={11} />
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
      age: "",
      gender: "",
      relationship: "",
      email: "",
      phone: "",
      address: "",
      ...record,
    });
    setEditingId(record.id);
  };

  const cancel = () => {
    // console.log(true);
    setOpenConfirm(false);
  };
  const ok = () => {
    setEditingId("");
    setOpenConfirm(false);
  };

  const handleSave = async (id) => {
    try {
      const row = await form.validateFields();
      const newInfoInflu = [...listInflu];
      const index = newInfoInflu.findIndex((item) => id === item.id);
      if (index > -1) {
        const item = newInfoInflu[index];
        newInfoInflu.splice(index, 1, {
          ...item,
          ...row,
        });
        setListInflu(newInfoInflu);
        setEditingId("");
      } else {
        newInfoInflu.push(row);
        setListInflu(newInfoInflu);
        setEditingId("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };
  // console.log(listInflu);

  const mergedTags = tags.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => {
        return {
          record,
          inputType: col.dataIndex === ("phone" && "age") ? "number" : "text",
          dataIndex: col.dataIndex,
          title: col.title,
          editing: isEditing(record),
        };
      },
    };
  });

  const handleDelete = (id) => {
    const newListInflu = listInflu.filter((item) => item.id !== id);
    setListInflu(newListInflu);
  };

  return (
    <>
      <div className="admin-influencer-layout">
        <div className="admin-influencer-list-layout">
          <div className="admin-influencer-table">
            <Form form={form} component={false}>
              <Table
                components={{
                  body: {
                    cell: EditableCell,
                  },
                }}
                columns={mergedTags}
                dataSource={listInflu}
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
export default AdminInfluencerLayout;
