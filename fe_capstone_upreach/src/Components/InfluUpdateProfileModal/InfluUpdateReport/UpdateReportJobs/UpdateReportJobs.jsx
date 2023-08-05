import "./UpdateReportJobs.css";
import React, { useEffect } from "react";
import {
  MinusCircleOutlined,
  PlusOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Select, Space } from "antd";
import UpdateJobItem from "./UpdateJobItem/UpdateJobItem";
import axios from "axios";
import { useUserStore } from "../../../../Stores/user";

const UpdateComponent = ({
  item,
  onItemUpdate,
  onItemRemove,
  index,
  editPost,
  setEditPost,
  isEditting,
  setIsEditting,
}) => {
  const [form] = Form.useForm();
  const { Option } = Select;
  const [estimateFrom, setEstimateFrom] = React.useState(item.costEstimateFrom);
  const [estimateTo, setEstimateTo] = React.useState(item.costEstimateTo);
  const [quantity, setQuantity] = React.useState(item.quantity);

  const [dataForm, setDataForm] = React.useState([
    {
      name: ["jobName"],
      value: item.jobName,
    },
    {
      name: ["costEstimateFrom"],
      value: Number(item.costEstimateFrom),
    },
    {
      name: ["costEstimateTo"],
      value: Number(item.costEstimateTo),
    },
    {
      name: ["formatContent"],
      value: item.formatContent,
    },
    {
      name: ["jobLink"],
      value: item.jobLink,
    },
    {
      name: ["platform"],
      value: item.platform,
    },
    {
      name: ["quantity"],
      value: Number(item.quantity),
    },
  ]);
  const formItemLayout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 19,
    },
  };

  const onFinish = (values) => {
    setIsEditting(false);

    const updatedItem = {
      ...item,
      jobName: values.jobName,
      costEstimateFrom: values.costEstimateFrom,
      costEstimateTo: values.costEstimateTo,
      formatContent: values.formatContent,
      jobLink: values.jobLink,
      platform: values.platform,
      quantity: values.quantity,
    };
    onItemUpdate(index, updatedItem);
    console.log(updatedItem);
    // setIdJobsRemove(updatedItem.jobId);
  };

  return (
    <>
      {editPost === index && isEditting === true ? (
        <Form
          name="validate_other"
          {...formItemLayout}
          onFinish={onFinish}
          fields={dataForm}
          onFieldsChange={(_, allFields) => {
            setDataForm(allFields);
          }}
          style={{
            maxWidth: "100%",
            height: "fit-content",
          }}
          autoComplete="off"
          form={form}
        >
          <Space
            key={index}
            style={{
              display: "grid",
              marginBottom: 8,
            }}
            align="baseline"
          >
            <MinusCircleOutlined
              onClick={() => {
                onItemRemove();
              }}
            />
            <Form.Item
              name="jobName"
              label="Job Name:"
              rules={[
                {
                  required: true,
                  message: "Please input job name!",
                },
              ]}
            >
              <Input placeholder="Please input job name" />
            </Form.Item>
            <Form.Item
              name="jobLink"
              label="Link:"
              rules={[
                {
                  required: true,
                  message: "Please input job link!",
                },
              ]}
            >
              <Input placeholder="Please input job link" />
            </Form.Item>
            <Form.Item
              name="platform"
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
              name="formatContent"
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
                <Option value="CF01">Text</Option>
                <Option value="CF02">Picture</Option>
                <Option value="CF03">Video</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="costEstimateFrom"
              label="Cost Estimate From"
              rules={[
                {
                  required: true,
                  message: "Please input cost estimate!",
                },
              ]}
            >
              <div>
                <Input
                  onChange={(e) => setEstimateFrom(e.target.value)}
                  value={estimateFrom}
                  placeholder="Input cost estimate from"
                  type="number"
                  maxLength={16}
                  style={{ width: "145px" }}
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

            <Form.Item
              name="costEstimateTo"
              label="Cost Estimate To"
              rules={[
                {
                  required: true,
                  message: "Please input cost estimate!",
                },
                {
                  validator: (rule, value) => {
                    if (value <= estimateFrom) {
                      return Promise.reject("Error");
                    }
                    return Promise.resolve();
                  },
                },
              ]}
              // validateStatus={EstimateFrom === "" ? "" : "error"}
              // help={EstimateFrom === "" ? "" : EstimateFrom}
            >
              <div>
                <Input
                  onChange={(e) => setEstimateTo(e.target.value)}
                  value={estimateTo}
                  placeholder="Input cost estimate to"
                  type="number"
                  maxLength={16}
                  style={{ width: "145px" }}
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
            <Form.Item
              name="quantity"
              label="Quantity"
              rules={[
                {
                  required: true,
                  message: "Please input quantity!",
                },
              ]}
            >
              <div>
                <Input
                  onChange={(e) => setQuantity(e.target.value)}
                  value={quantity}
                  placeholder="Input quantity"
                  type="number"
                  maxLength={16}
                  style={{ width: "145px" }}
                />

                <span
                  className="ant-form-text"
                  style={{
                    marginLeft: 8,
                  }}
                ></span>
              </div>
            </Form.Item>
          </Space>

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
      ) : (
        <div onClick={() => setEditPost(index)}>
          <UpdateJobItem bookingItem={item} />
        </div>
      )}
    </>
  );
};

const UpdateReportJobs = ({
  bookingInfo,
  setBookingInfo,
  idJobsRemove,
  setIdJobsRemove,
}) => {
  const [user] = useUserStore((state) => [state.user]);
  const [isAdding, setIsAdding] = React.useState(false);
  const [isEditting, setIsEditting] = React.useState(false);
  const [editingIndex, setEditingIndex] = React.useState(-1);
  const [estimateFrom, setEstimateFrom] = React.useState("");
  const [editPost, setEditPost] = React.useState("");

  const [form] = Form.useForm();
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
    console.log("run", values);
    if (values?.jobs) {
      setBookingInfo([...bookingInfo, ...values.jobs]);
      setIsAdding(false);
      form.resetFields();
    }
  };
  const handleItemUpdate = (index, updatedItem) => {
    setBookingInfo((prevBookingInfo) => {
      const updatedBookingInfo = [...prevBookingInfo];
      updatedBookingInfo[index] = updatedItem;
      return updatedBookingInfo;
    });
  };

  // const handleItemRemove = (indexToRemove) => {
  //   if (indexToRemove === editingIndex) {
  //     setIsEditting(false);
  //     setEditPost("");
  //   }
  //   setBookingInfo((prevBookingInfo) => {
  //     const removedItem = prevBookingInfo[indexToRemove];
  //     if (removedItem) {
  //       setIdJobsRemove(removedItem.jobId);
  //     }
  //     const updatedBookingInfo = [...prevBookingInfo];
  //     updatedBookingInfo.splice(indexToRemove, 1);
  //     return updatedBookingInfo;
  //   });
  // };
  const handleItemRemove = (indexToRemove) => {
    if (indexToRemove === editingIndex) {
      setIsEditting(false);
      setEditPost("");
    }

    setBookingInfo((prevBookingInfo) => {
      const removedItem = prevBookingInfo[indexToRemove];
      if (removedItem) {
        // Store the jobId of the removed job in deletedJobIds state
        setIdJobsRemove((prevDeletedJobIds) => [
          ...prevDeletedJobIds,
          removedItem.jobId,
        ]);
      }

      const updatedBookingInfo = [...prevBookingInfo];
      updatedBookingInfo.splice(indexToRemove, 1);
      return updatedBookingInfo;
    });
  };

  // React.useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/api/influ/get-jobs-influencer", {
  //       params: {
  //         email: user.influencerEmail,
  //       },
  //     })

  //     .then((response) => {
  //       const jobDataArray = response.data.data;
  //       // console.log(response);

  //       const bookingList = jobDataArray.map((data) => ({
  //         jobId: data?.Job_ID,
  //         jobName: data?.Name_Job,
  //         platform: data?.Platform_Job,
  //         jobLink: data?.Link,
  //         quantity: data?.Quantity,
  //         costEstimateFrom: data?.CostEstimate_From_Job,
  //         costEstimateTo: data?.CostEstimate_To_Job,
  //         formatContent: data?.Format_Id,
  //       }));
  //       // console.log(bookingList);
  //       setBookingInfo(bookingList);
  //       // console.log(bookingInfo);
  //     })
  //     .catch((error) => {
  //       console.error(
  //         "Error while fetching previewBooking information:",
  //         error
  //       );
  //     });
  // }, []);

  return (
    <>
      <div className="report-update-jobs-layout">
        {bookingInfo.length === 0 ? (
          ""
        ) : (
          <div className="job-view">
            {bookingInfo?.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setIsEditting(true);
                  setEditingIndex(index);
                }}
              >
                <UpdateComponent
                  isEditting={isEditting && index === editingIndex}
                  setIsEditting={setIsEditting}
                  setEditPost={setEditPost}
                  editPost={editPost}
                  index={index}
                  item={item}
                  onItemUpdate={handleItemUpdate}
                  onItemRemove={() => handleItemRemove(index)}
                />
              </div>
            ))}
          </div>
        )}
        <div className="update-jobs">
          <Form
            name="validate_other"
            {...formItemLayout}
            onFinish={onFinish}
            style={{
              maxWidth: "100%",
              height: "fit-content",
            }}
            autoComplete="off"
            form={form}
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
                      <MinusCircleOutlined
                        onClick={() => {
                          setIsAdding(false);
                          remove(field.name);
                        }}
                      />
                      <Form.Item
                        {...field}
                        name={[field.name, "jobName"]}
                        label="Job Name:"
                        rules={[
                          {
                            required: true,
                            message: "Please input job name!",
                          },
                        ]}
                      >
                        <Input placeholder="Please input job name" />
                      </Form.Item>
                      <Form.Item
                        {...field}
                        name={[field.name, "jobLink"]}
                        label="Link:"
                        rules={[
                          {
                            required: true,
                            message: "Please input job link!",
                          },
                        ]}
                      >
                        <Input placeholder="Please input job link" />
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
                        name={[field.name, "formatContent"]}
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
                          <Option value="CF01">Text</Option>
                          <Option value="CF02">Picture</Option>
                          <Option value="CF03">Video</Option>
                        </Select>
                      </Form.Item>

                      <Form.Item
                        {...field}
                        name={[field.name, "costEstimateFrom"]}
                        label="Cost Estimate From"
                        rules={[
                          {
                            required: true,
                            message: "Please input cost estimate!",
                          },
                        ]}
                      >
                        <div>
                          <Input
                            onChange={(e) => setEstimateFrom(e.target.value)}
                            placeholder="Input cost estimate from"
                            type="number"
                            maxLength={16}
                            style={{ width: "145px" }}
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
                      <Form.Item
                        {...field}
                        name={[field.name, "costEstimateTo"]}
                        label="Cost Estimate To"
                        rules={[
                          {
                            required: true,
                            message: "Please input cost estimate!",
                          },
                          {
                            validator: (rule, value) => {
                              // Custom validation function to check for the 'EstimateFrom' value
                              if (value <= estimateFrom) {
                                return Promise.reject("Error");
                              }
                              return Promise.resolve();
                            },
                          },
                        ]}
                        // validateStatus={EstimateFrom === "" ? "" : "error"}
                        // help={EstimateFrom === "" ? "" : EstimateFrom}
                      >
                        <div>
                          <Input
                            placeholder="Input cost estimate to"
                            type="number"
                            maxLength={16}
                            style={{ width: "145px" }}
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
                      <Form.Item
                        {...field}
                        name={[field.name, "quantity"]}
                        label="Quantity"
                        rules={[
                          {
                            required: true,
                            message: "Please input quantity!",
                          },
                        ]}
                      >
                        <div>
                          <Input
                            placeholder="Input quantity"
                            type="number"
                            maxLength={16}
                            style={{ width: "145px" }}
                          />

                          <span
                            className="ant-form-text"
                            style={{
                              marginLeft: 8,
                            }}
                          ></span>
                        </div>
                      </Form.Item>
                    </Space>
                  ))}

                  {isAdding ? (
                    ""
                  ) : (
                    <Form.Item name="add-btn">
                      <Button
                        type="dashed"
                        onClick={() => {
                          setIsAdding(true);
                          add();
                        }}
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
                  )}
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
      </div>
    </>
  );
};

export default UpdateReportJobs;
