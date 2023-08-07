import React from "react";
import { DndContext, PointerSensor, useSensor } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Upload, Modal } from "antd";
import ImgCrop from "antd-img-crop";
import "./InfluUpdateImage.css";
import DraggableUploadListItem from "./DraggableUploadListItem/DraggableUploadListItem";
import { useUserStore } from "../../../Stores/user";
import axios from "axios";

const InfluUpdateImage = ({ influInfo, setInfluInfo, setIsChange }) => {
  const [fileList, setFileList] = React.useState(
    Array.isArray(influInfo.Image) ? influInfo.Image : []
  );

  const sortableItemIds = fileList.map((file) => file.uid);
  const [previewOpen, setPreviewOpen] = React.useState(false);
  const [previewImage, setPreviewImage] = React.useState("");
  const [user] = useUserStore((state) => [state.user]);

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  const onChange = ({ fileList: newFileList }) => {
    // console.log(prev);
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const sensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  const onDragEnd = ({ active, over }) => {
    if (active.id !== over?.id) {
      setFileList((prev) => {
        const activeIndex = prev.findIndex((i) => i.uid === active.id);
        const overIndex = prev.findIndex((i) => i.uid === over?.id);
        return arrayMove(prev, activeIndex, overIndex);
      });
    }
  };
  React.useEffect(() => {
    setInfluInfo({
      ...influInfo,
      Image: fileList,
    });
  }, [fileList]);

  const checkImages = (arr1, arr2) => {
    if (arr1?.length !== arr2?.length) {
      return false;
    }

    for (let i = 0; i < arr1?.length; i++) {
      if (arr1[i].uid !== arr2[i].uid) {
        return false;
      }
    }

    return true;
  };
  React.useEffect(() => {
    if (!checkImages(influInfo.Image, user.Image)) {
      setIsChange(true);
    }
  }, [influInfo, influInfo.Image]);

  React.useEffect(() => {
    axios
      .get("http://localhost:4000/api/influ/get-images-influencer", {
        params: {
          email: user.influencerEmail,
        },
      })
      .then((response) => {
        const ImageData = response.data.data;
        const imageList = ImageData.map((data) => {
          if (data?.Image && data?.Image_ID) {
            return {
              url: data.Image,
              uid: data.Image_ID,
            };
          }
          return null;
        }).filter((item) => item !== null);
        setFileList(imageList);
        setIsChange(false);
      })
      .catch((error) => {
        console.error("Error while fetching Image information:", error);
      });
  }, []);
  console.log(influInfo.Image);

  return (
    <>
      <Modal
        open={previewOpen}
        footer={null}
        onCancel={() => setPreviewOpen(false)}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
      <div className="influ-update-images">
        <DndContext sensors={[sensor]} onDragEnd={onDragEnd}>
          <SortableContext
            items={sortableItemIds}
            strategy={verticalListSortingStrategy}
          >
            <ImgCrop rotationSlider>
              <Upload
                customRequest={({ file, onSuccess }) => {
                  onSuccess("ok");
                }}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                beforeUpload={() => true}
                onChange={onChange}
                onPreview={onPreview}
                data={influInfo?.Image}
                itemRender={(originNode, file) => (
                  <DraggableUploadListItem
                    originNode={originNode}
                    file={file}
                  />
                )}
              >
                {!fileList
                  ? "+ Upload"
                  : fileList.length < 3
                  ? "+ Upload"
                  : null}
              </Upload>
            </ImgCrop>
          </SortableContext>
        </DndContext>
      </div>
    </>
  );
};
export default InfluUpdateImage;
