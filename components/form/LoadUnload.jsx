import { FaCloudUploadAlt, FaCloudDownloadAlt, FaExclamationTriangle } from "react-icons/fa";
import React, { useContext, useState } from "react";
import { ResumeContext } from "../../pages/builder";

const LoadUnload = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const [message, setMessage] = useState({ text: "", type: "" });

  const clearMessage = () => {
    setTimeout(() => setMessage({ text: "", type: "" }), 3000);
  };

  const handleLoad = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.name.endsWith('.json')) {
      setMessage({ text: "Please select a JSON file", type: "error" });
      clearMessage();
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const loadedData = JSON.parse(e.target.result);
        setResumeData(loadedData);
        setMessage({ text: "Resume loaded successfully", type: "success" });
      } catch {
        setMessage({ text: "Invalid JSON file", type: "error" });
      }
      clearMessage();
    };
    reader.readAsText(file);
    event.target.value = '';
  };

  const handleDownload = (event) => {
    event.preventDefault();
    if (!resumeData) return;

    try {
      const filename = `resume_${new Date().toISOString().split('T')[0]}.json`;
      const blob = new Blob([JSON.stringify(resumeData, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      link.click();
      URL.revokeObjectURL(url);
      setMessage({ text: "Resume downloaded", type: "success" });
    } catch {
      setMessage({ text: "Download failed", type: "error" });
    }
    clearMessage();
  };

  return (
    <div className="p-4 bg-white border rounded shadow-sm">
      {message.text && (
        <div className={`mb-4 p-2 rounded ${
          message.type === "error" 
            ? "bg-red-100 text-red-700" 
            : "bg-green-100 text-green-700"
        }`}>
          {message.type === "error" && <FaExclamationTriangle className="inline mr-2" />}
          {message.text}
        </div>
      )}

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="flex flex-col items-center p-4 border-2 border-dashed rounded cursor-pointer hover:bg-gray-50">
            <FaCloudUploadAlt className="mb-2 text-gray-500" />
            <span className="font-medium">Upload Resume</span>
            <span className="text-sm text-gray-500">JSON format</span>
            <input 
              type="file" 
              className="hidden" 
              accept=".json" 
              onChange={handleLoad} 
            />
          </label>
        </div>

        <div className="flex-1">
          <button
            onClick={handleDownload}
            disabled={!resumeData}
            className={`flex flex-col items-center w-full p-4 border-2 border-dashed rounded ${
              !resumeData 
                ? "cursor-not-allowed opacity-50" 
                : "cursor-pointer hover:bg-gray-50"
            }`}
          >
            <FaCloudDownloadAlt className="mb-2 text-blue-500" />
            <span className="font-medium">Download Resume</span>
            <span className="text-sm text-gray-500">Save as JSON</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoadUnload;