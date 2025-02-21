import React, { useState } from 'react';
import axios from 'axios';
import { X } from "lucide-react"
import { useNavigate } from 'react-router-dom';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [prediction, setPrediction] = useState(null);
    const [diseaseName, setDiseaseName] = useState(null);  
    const [diseaseInfo, setDiseaseInfo] = useState(null);  
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            alert("Please upload a file.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        setLoading(true);
        setError(null); 

        try {
            const response = await axios.post('http://localhost:5000/predict', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setPrediction(response.data.disease);
            setDiseaseName(response.data.disease);  
        } catch (err) {
            console.error('Error:', err);
            setError(err.response ? err.response.data.error : err.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchDiseaseInfo = async () => {
        try {
            const response = await fetch('http://localhost:5001/get_disease_info', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ disease_name: diseaseName })
            });

            const data = await response.json();
            if (response.ok) {
                setDiseaseInfo(data);
                setError('');
            } else {
                setDiseaseInfo(null);
                setError(data.error);
            }
        } catch (err) {
            setError('Failed to fetch disease information');
        }
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-green-200 to-blue-200 p-6 ">
            <div className="relative bg-white shadow-2xl rounded-xl p-8 w-full max-w-lg  border border-gray-200">


            <button onClick={() => navigate('/')} className="absolute top-3 right-3">
                    <X className="h-6 w-6 text-gray-600 hover:text-red-600" />
            </button>
          
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Upload Image for Crop Disease Prediction
                </h1>

                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="border border-gray-300 p-3 rounded-md text-sm  focus:ring-2 focus:ring-green-500 focus:outline-none"
                    />

                    <button
                        type="submit"
                        className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300 shadow-md disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>

                {prediction && (
                    <div className="mt-6 text-center">
                        <p className="text-green-700 font-semibold text-lg ">
                            Predicted Disease: {prediction}
                        </p>
                        <button
                            onClick={fetchDiseaseInfo}
                            className="mt-3 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
                        >
                            More Information
                        </button>
                    </div>
                )}

                {diseaseInfo && (
                    <div className="mt-6 text-left bg-gray-100 p-5 rounded-lg shadow-inner border border-gray-300">
                        <h3 className="text-lg font-bold text-gray-800">Disease Information:</h3>
                        <pre className='text-sm text-gray-700 whitespace-pre-wrap break-words'>{JSON.stringify(diseaseInfo, null, 2)}</pre>
                    </div>
                   
                )}

                {error && (
                    <p className="mt-4 text-red-600 text-center font-semibold">
                        Error: {error}
                    </p>
                )}
            </div>
        </div>
    );
};

export default FileUpload;