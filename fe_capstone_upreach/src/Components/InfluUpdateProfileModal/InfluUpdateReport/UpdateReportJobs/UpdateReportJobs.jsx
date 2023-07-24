import "./UpdateReportJobs.css";
import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Space } from "antd";
const UpdateReportJobs = () => {
  const { Option } = Select;
  const formItemLayout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 19,
    },
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <>
      <div className="report-update-jobs-layout">
        <Form
          name="validate_other"
          {...formItemLayout}
          onFinish={onFinish}
          style={{
            maxWidth: "100%",
            height: "fit-content",
          }}
          autoComplete="off"
        >
          <Form.List name="jobs">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field) => (
                  <Space
                    key={field.id}
                    style={{
                      display: "grid",
                      marginBottom: 8,
                    }}
                    align="baseline"
                  >
                    <MinusCircleOutlined onClick={() => remove(field.name)} />
                    <Form.Item
                      {...field}
                      name={[field.name, "job-name"]}
                      label="Job Name:"
                      rules={[
                        {
                          required: true,
                          message: "Please input job name!",
                        },
                      ]}
                    >
                      <Input placeholder="Please input job name" autoFocus />
                    </Form.Item>
                    <Form.Item
                      {...field}
                      name={[field.name, "platform"]}
                      label="Choose Platform"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please select a platform!",
                        },
                      ]}
                    >
                      <Select placeholder="Please select a country">
                        <Option value="facebook">Facebook</Option>
                        <Option value="instagram">Instagram</Option>
                        <Option value="youtube">Youtube</Option>
                        <Option value="tiktok">Tiktok</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item
                      {...field}
                      name={[field.name, "format-content"]}
                      label="Format content"
                      rules={[
                        {
                          required: true,
                          message: "Please select format content!",
                          type: "array",
                        },
                      ]}
                    >
                      <Select
                        mode="multiple"
                        placeholder="Please select format content"
                      >
                        <Option value="text">Text</Option>
                        <Option value="picture">Picture</Option>
                        <Option value="video">Video</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item
                      {...field}
                      name={[field.name, "cost-estimate"]}
                      label="Cost Estimate"
                      rules={[
                        {
                          // required: true,
                          message: "Please input cost estimate!",
                        },
                      ]}
                    >
                      <div>
                        <Input
                          placeholder="Input cost estimate"
                          type="number"
                          maxLength={16}
                          style={{ width: "145px" }}
                          autoFocus
                        />

                        <span
                          className="ant-form-text"
                          style={{
                            marginLeft: 8,
                          }}
                        >
                          VND
                        </span>
                      </div>
                    </Form.Item>
                  </Space>
                ))}

                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "40px",
                    }}
                  >
                    Add Job
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>

          <Form.Item
            wrapperCol={{
              span: 19,
            }}
          >
            <Space>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default UpdateReportJobs;
