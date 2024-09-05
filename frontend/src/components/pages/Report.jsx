import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Lottie from "lottie-react";
import signup4 from '../animation/signup4.json'

const Prescription = () => {
    const [title, setTitle] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadedFiles, setUploadedFiles] = useState([]);

    // Fetch uploaded files when component mounts
    useEffect(() => {
        fetchUploadedFiles();
    }, []);

    const fetchUploadedFiles = async () => {
        try {
            const response = await axios.get('http://localhost:3001/get-files');
            setUploadedFiles(response.data.data);
        } catch (error) {
            console.error('Error fetching files:', error);
        }
    };

    // Handle file selection
    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    

    // Handle file submission
    const submitImage = async (e) => {
        e.preventDefault();

        if (!selectedFile) {
            console.error('No file selected.');
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('file', selectedFile);

        try {
            const response = await axios.post('http://localhost:3001/upload-files', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('File uploaded successfully:', response.data);
            alert('File uploaded successfully');
            fetchUploadedFiles(); // Refresh the list of uploaded files
        } catch (error) {
            if (error.response) {
                console.error('Server responded with an error:', error.response.data);
            } else if (error.request) {
                console.error('No response received:', error.request);
            } else {
                console.error('Error setting up the request:', error.message);
            }
        }
    };

    const [text] = useTypewriter({
      words: [ "Securely upload your report here!", "Your health matters. Upload your report now!", "Easy report upload—just a click away!"],
      loop: true,
      typeSpeed: 50,
      deleteSpeed: 50,
      delaySpeed: 2000,
    })

    return (
      <div className=" p-10 flex justify-between items-start space-x-56">
      {/* Left Section: Form and Uploaded Files */}
      <div className=" ml-20 p-5 rounded-lg w-full max-w-xl">
          <div className=" p-3 rounded-t-lg">
              <h4 className="text-2xl text-green-500 font-semibold">{text}<Cursor/></h4>
          </div>
          <form onSubmit={submitImage} className="mt-5 space-y-3">
              <input
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                  type="file"
                  onChange={handleFileChange}
                  accept="application/pdf"
                  required
                  className="w-full p-2 border border-gray-300 rounded"
              />
              <button
                  className="btn-primary "
                  type="submit"
              >
                  Submit
              </button>
          </form>
  
          <div className="mt-10">
              <h4 className="text-2xl">Uploaded Files:</h4>
              {uploadedFiles.length > 0 ? (
                  <ul className="list-disc pl-5">
                      {uploadedFiles.map((file) => (
                          <li key={file._id} className="mt-2">
                              <strong>{file.title}</strong> - 
                              <a
                                  href={`http://localhost:3001/files/${file.pdf}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-500 ml-2"
                              >
                                  View PDF
                              </a>
                          </li>
                      ))}
                  </ul>
              ) : (
                  <p>No files uploaded yet.</p>
              )}
          </div>
      </div>
  
      {/* Right Section: Animation */}
      <div className="flex-shrink-0 h-96  rounded-lg  mt-32">
          <Lottie animationData={signup4} className="h-full"/>
      </div>
  </div>
      
    );
};

export default Prescription;
