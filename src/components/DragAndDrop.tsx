import React, { useState } from "react";
import { Upload, Button, message } from "antd";
import type { UploadFile } from "antd";
import { UploadOutlined, DownloadOutlined, SyncOutlined } from "@ant-design/icons";
// import axios from "axios"; // Uncomment if axios is installed

const { Dragger } = Upload;

const DragAndDrop: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [convertLoading, setConvertLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [downloadFileName, setDownloadFileName] = useState<string>("");

  // Only accept .ipynb files
  const beforeUpload = (file: File) => {
    const isIpynb = file.name.endsWith(".ipynb");
    if (!isIpynb) {
      message.error("Only .ipynb files are allowed!");
    }
    return isIpynb ? false : Upload.LIST_IGNORE;
  };

  const onChange = (info: any) => {
    // Filter only .ipynb files
    const validFiles = info.fileList.filter((f: UploadFile) => f.name.endsWith(".ipynb"));
    setFileList(validFiles);
    setDownloadUrl(null); // Reset download when new file is uploaded
  };

  const handleConvert = async () => {
    if (!fileList.length) return;
    setConvertLoading(true);
    setDownloadUrl(null);
    setDownloadFileName("");
    // const formData = new FormData();
    // formData.append("file", fileList[0] as any);
    try {
      // Replace with your backend endpoint and uncomment axios code if axios is installed
      // const response = await axios.post("/api/convert", formData, {
      //   responseType: "blob",
      //   headers: { "Content-Type": "multipart/form-data" },
      // });
      // const url = window.URL.createObjectURL(new Blob([response.data]));
      // setDownloadUrl(url);
      // setDownloadFileName("converted_notebook.zip"); // or response filename
      // message.success("Notebook converted! Download is ready.");
      setTimeout(() => {
        setDownloadUrl("/dummy/converted_notebook.zip");
        setDownloadFileName("converted_notebook.zip");
        message.success("Notebook converted! Download is ready.");
        setConvertLoading(false);
      }, 1500);
    } catch (error) {
      message.error("Conversion failed. Please try again.");
      setConvertLoading(false);
    }
  };

  const handleDownload = () => {
    if (downloadUrl) {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.setAttribute("download", "converted_notebook.zip");
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
      <Dragger
        name="file"
        multiple={false}
        fileList={fileList}
        beforeUpload={beforeUpload}
        onChange={onChange}
        accept=".ipynb"
        style={{ width: 300, padding: 16 }}
      >
        <p className="ant-upload-drag-icon">
          <UploadOutlined style={{ fontSize: 32 }} />
        </p>
        <p className="ant-upload-text">Click or drag .ipynb file to this area to upload</p>
        <p className="ant-upload-hint">Only Jupyter Notebook (.ipynb) files are supported.</p>
      </Dragger>
      <Button
        type="primary"
        icon={<SyncOutlined />}
        onClick={handleConvert}
        disabled={fileList.length === 0}
        loading={convertLoading}
        style={{ width: 180 }}
      >
        Convert Notebook
      </Button>
      {downloadUrl && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: 300, background: '#f6ffed', border: '1px solid #b7eb8f', borderRadius: 6, padding: '12px 16px', marginTop: 8 }}>
          <span style={{ fontWeight: 500, color: '#389e0d' }}>{downloadFileName}</span>
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            onClick={handleDownload}
            style={{ marginLeft: 16 }}
          >
            Download
          </Button>
        </div>
      )}
    </div>
  );
};

export default DragAndDrop;
